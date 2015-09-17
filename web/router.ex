defmodule Video.Router do
  use Video.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", Video do
    pipe_through :browser

    get "/", RoomController, :index
    get "/:name", RoomController, :show
  end
end
