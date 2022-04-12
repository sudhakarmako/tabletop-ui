import { GameCard } from "@components";
import { Container, Row } from "@ui";
import { Col } from "@ui/Col";
import games from "./data.json";
const Games = () => {
  return (
    <Container>
      <Row>
        {games.map((game) => {
          return (
            <Col sm={6} md={4} lg={3} xl={2}>
              <GameCard game={game} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Games;
