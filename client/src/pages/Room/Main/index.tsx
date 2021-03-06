import React from "react";
import "./styles.css";

type Props = {};

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

export const Main: React.VFC<Props> = () => {
  return (
    <div className="main-wrapper">
      <div>current card</div>
      <div>Your cards</div>
    </div>
  );
};
