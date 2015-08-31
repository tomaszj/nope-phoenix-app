// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import {Socket} from "deps/phoenix/web/static/js/phoenix"

let chat_list = $("#nopes-list")
let username_field = $("#username")
let submit_button = $("#submit-button")


let socket = new Socket("/socket")
socket.connect()
let chan = socket.channel("nope_channel:", {})

chan.join().receive("ok", chan => {
  console.log("Welcome to Phoenix Chat!")
  chat_list.append("<li>// Connected.</li>")
})

chan.on("new:message", function(msg) {
  let sanitized_user = $("<div></div>").text(msg.user).html()
  chat_list.append("<li>Nope! from <i>" + sanitized_user + "</i></li>")
})

submit_button.on("click", function() {
  chan.push("new:message", {
    username: username_field.val()
  })
})
