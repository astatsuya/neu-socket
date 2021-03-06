import React from "react";
import "./styles.css";

type Props = {
  name: string;
};

export const Card: React.VFC<Props> = ({ name }) => {
  return (
    <div className="card-wrapper">
      <span>{name}</span>
    </div>
  );
};
