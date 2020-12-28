# Socket.IO

Socket.IO library is divived in 2 parts, client and server.

Socket.IO is a realtime, bi-directional, event-based library.

Socket.IO supports more browsers, specially old ones.

Socket.IO can be used for:

- Messaging
- Analytics
- Streaming

## Common Methods

- emit()
  - send events.
- on()
  - listen for events.

## Reserved Events

In Socket.IO, there are two types of events:

- Reserved
- User Defined

Reserved events are events/keywords built-in the library.

We can make our own events, user-defined.

**Client Side Reserved Events:**

- connect
  - This is fired when the client is successfully connected and also in case of reconnection.
- connect_error
  - This is fired upon a connection error. An Object error is received with it.
- connect_timeout
  - This is fired when a timeout occurs in the connection. When client has stopped receiving data from the server for too long.
- error
  - This is fired when any error occurs.
- disconnect
  - This happens when a diconnection happens. One of the following reason strings is received:
    1. io client disconnect
    2. io server disconnect
    3. ping timeout
- reconnect
  - This is fired upon successful reconnection with number of attempts.
- reconnect_attempt
  - This is fired upon an attempt to reconnect.
- reconnecting
  - This is also fired upon an attempt to reconnect.
- reconnect_error
  - This is fired on reconnection error.
    Object error is received.
- reconnect_failed
  - This is fired when reconnection couldn't happen within reconnection attempts.
- ping
  - Fired when ping packet is send to server.
- pong
  - Fired when a pong is received from the server. Latency is microsecs elapsed since ping packet.

**Server Side Reserved Events:**

- diconnect
  - This is fired when disconnection happens. One of the following reason strings is received:
    1. transport error
       - Transport error
    2. server namespace disconnect
       - Server performs a socker.disconnect()
    3. client namespace diconnect
       - Got disconnect packet from client.
    4. ping timeout
       - Client stopped responding to pings in the allowed amount of time.
    5. transport close
       - Client stopped sending data.
- error
  - Fired whenever an error happens.
- disconnecting
  - Fired when client is going to be disconnected but haven't left the rooms.

## Broadcasting Messages

- io.emit()
  - Sends a message to all connected clients.
- socket.broadcast.emit()
  - Sends a message to all connected clients expect the sender.

## Namespaces

- In Socket.IO, you can namespace your sockets; assign them different paths.
- We have to create the namespace on our server side and the client has to specify the path while connecting.
- By namespacing, we can minimize the number of TCP connections.
- It makes your application more flexible by separating different communication channels.

**Default Connection:**

- By default the sockets namespace is "/". It is joined by the clients if no namespace is provided by them when connecting to the server.

```JS
  let socket = io()
```

**User-Defined Namespaces:**

- We can define namespaces with the io.of("/path") function on the server.

  ```JS
    const namespace = io.of("user-namespace")
  ```

- In the client side, you can connect to the namespace.

  ```JS
    const socket = io("user-namespace")
  ```

## Rooms

- Inside every namespace, you can define channels or rooms.

- Sockets can join and leave these rooms.

- Rooms are made to make things more flexible and they share the same WebSocket connection similar to namespaces.

**Joining and Leaving Rooms:**

- You can suscribe to any rooms by using the join method of the socket.

```JS
  io.on("connection", (socket) => {
    socket.join("room_name");
  });
```

- To emit events to a particular room, we can use to or in methods.

```JS
  io.to("room_name").emit("event_name");
```

- To leave the room, we use the leave method.

```JS
  io.on("connection", (socket) => {
    socket.leave("room_name");
  });
```

- Each Socket has a unique id which you can find at socket.id.

- Each Socket automatically joins a room indentified by his id.

- You can send messages to other sockets if you know their id.

```JS
  socket.io("other_socket_id").emit("event_name");
```
