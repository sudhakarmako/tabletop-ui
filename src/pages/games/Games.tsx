import { GameCard } from "@components";
import { Container, Modal, Row } from "@ui";
import { Col } from "@ui/Col";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
// import games from "./data.json";
import Game from "./Game";
const Games = () => {
  const {games} = useSelector((state:RootState) => state.game)
  const [gameModal, setGameModal] = useState<boolean>(false);
  const [gameId, setGameId] = useState<number | null>(null);
  
  return (
    <>
      <Container>
        <Row>
          {games.map((game, key) => {
            return (
              <Col sm={6} md={4} lg={4} xl={2}>
                <GameCard
                  key={key}
                  game={game}
                  setGameModal={setGameModal}
                  setGameId={setGameId}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal open={gameModal} onClose={() => setGameModal(false)}>
        <Game gameId={gameId} />
      </Modal>
    </>
  );
};

export default Games;
