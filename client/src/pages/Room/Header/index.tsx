import "./styles.css";

type Props = {
  username: string;
  roomName: string;
};

export const Header: React.VFC<Props> = ({ username, roomName }) => {
  return (
    <header className="header-wrapper">
      <h2>neu</h2>
      <div>{roomName}</div>
      <div>{username}</div>
    </header>
  );
};
