defmodule Video.RoomChannel do
  use Phoenix.Channel

  def join("messages:new" <> room_name, auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("new:message", %{"body" => message}, socket) do
    broadcast! socket, "new:message", %{body: message, key: message}
    {:noreply, socket}
  end

  def handle_out("new:message", payload, socket) do
    push(socket, "new:message", payload)
    {:noreply, socket}
  end
end
