import React, { useState } from "react";
import "./App.css";
import { Room } from "./pages/Room";
import { Top } from "./pages/Top";

export const App: React.VFC = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [isInRoom, setIsInRoom] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsInRoom(true);
  };

  const leaveARoom = () => {
    setIsInRoom(false);
    setUsername("");
    setRoomName("");
  };

  return (
    <div className="App">
      {!isInRoom && (
        <Top
          username={username}
          setUsername={setUsername}
          roomName={roomName}
          setRoomName={setRoomName}
          onSubmit={handleSubmit}
        />
      )}
      {isInRoom && (
        <Room username={username} roomName={roomName} leaveARoom={leaveARoom} />
      )}
    </div>
  );
};
