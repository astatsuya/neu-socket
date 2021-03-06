import React, { useState } from "react";
import "./App.css";
import { Top } from "./pages/Top";

export const App: React.VFC = () => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className="App">
      <Top
        username={username}
        setUsername={setUsername}
        roomName={roomName}
        setRoomName={setRoomName}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
