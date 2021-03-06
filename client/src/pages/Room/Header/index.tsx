import "./styles.css";

type Props = {
  username: string;
  roomName: string;
};

export const Header: React.VFC<Props> = ({ username, roomName }) => {
  return (
    <header className="header-wrapper">
      <ul className="room-and-name">
        <li>
          <span className="list-title">Room:</span>
          <span>{roomName}</span>
        </li>
        <li>
          <span className="list-title">Your name:</span>
          <span>{username}</span>
        </li>
        <li>
          <span className="list-title">Members:</span>
          <span>member1</span>
          <span>member2</span>
          <span>member3</span>
          <span>member4</span>
          <span>member5</span>
        </li>
      </ul>
    </header>
  );
};
