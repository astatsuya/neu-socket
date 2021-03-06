import React from "react";
import "./styles.css";

type Props = {
  username: string;
  setUsername: (e: string) => void;
  roomName: string;
  setRoomName: (e: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Top: React.VFC<Props> = ({
  username,
  setUsername,
  roomName,
  setRoomName,
  onSubmit,
}) => {
  return (
    <div className="top-wrapper">
      <form onSubmit={onSubmit}>
        <div className="text-input">
          <label>
            <span>username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="text-input">
          <label>
            <span>roomName</span>
            <input
              type="text"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
            />
          </label>
        </div>
        <button>Start neu!</button>
      </form>
    </div>
  );
};
