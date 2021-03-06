import React from "react";
import "./styles.css";

type Props = {
  username: string;
  roomName: string;
  leaveARoom: () => void;
};

/**
 * ルール
 * 出した合計が101を超えると負け
 * 1~10のカード
 * -1~10のカード
 * 50のカード
 * 101のカード(101になる)
 * PASS
 * TURN
 * SHOT
 * DOUBLE
 *
 * 各プレイヤーの手札は3枚
 * 1枚出したら1枚引く。101までセーフで、102以上で負け
 */

export const Room: React.VFC<Props> = ({ username, roomName, leaveARoom }) => {
  return (
    <div className="room-wrapper">
      <header>
        <h2>neu</h2>
        <div>{roomName}</div>
        <div>{username}</div>
      </header>
      <div>
        <div>current card</div>
        <div>Your cards</div>
      </div>
      <footer>
        <button onClick={leaveARoom}>leave</button>
      </footer>
    </div>
  );
};
