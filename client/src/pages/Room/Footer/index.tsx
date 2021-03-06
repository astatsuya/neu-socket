import "./styles.css";

type Props = {
  leaveARoom: () => void;
};

export const Footer: React.VFC<Props> = ({ leaveARoom }) => {
  return (
    <header className="footer-wrapper">
      <button onClick={leaveARoom}>leave</button>
    </header>
  );
};
