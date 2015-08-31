defmodule NopeApp.NopeChannel do
  use Phoenix.Channel

  def join("nope_channel:", auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("new:message", msg, socket) do
    broadcast! socket, "new:message", %{user: msg["username"]}
    {:noreply, socket}
  end
end