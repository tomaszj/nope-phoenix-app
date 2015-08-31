defmodule NopeApp.PageController do
  use NopeApp.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
