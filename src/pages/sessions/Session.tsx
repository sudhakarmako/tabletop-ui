import { Container } from "@ui";

const Session = () => {
  return (
    <Container>
      <div className="session-bar">
        <div className="chips"></div>
        <div className="total">
          Current Session: <strong>435</strong>
        </div>
      </div>
    </Container>
  );
};

export default Session;
