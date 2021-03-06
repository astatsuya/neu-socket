import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import "./styles.css";

type Props = {
  username: string;
  roomName: string;
  leaveARoom: () => void;
};

export const Room: React.VFC<Props> = ({ username, roomName, leaveARoom }) => {
  return (
    <div className="room-wrapper" style={{ height: `${window.innerHeight}px` }}>
      <Header username={username} roomName={roomName} />
      <Main />
      <Footer leaveARoom={leaveARoom} />
    </div>
  );
};
