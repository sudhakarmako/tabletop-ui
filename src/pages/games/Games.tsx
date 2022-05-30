import { GameCard } from "@components";
import { Container, Modal, Row } from "@ui";
import { Col } from "@ui/Col";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getGamesAction } from "store/actions/game.actions";
// import games from "./data.json";
import Game from "./Game";
const Games = () => {
  const {games} = useSelector((state:RootState) => state.game)
  const [gameModal, setGameModal] = useState<boolean>(false);
  const [gameDetail, setGameDetail] = useState<number | null>(null);
  const dispatch  = useDispatch();

  console.log("games", games);
  
  useEffect(() => {
    dispatch(getGamesAction(""))
  }, []);
  return (
    <>
      <Container>
        <Row>
          {games.map((game) => {
            return (
              <Col sm={6} md={4} lg={4} xl={2}>
                <GameCard
                  game={game}
                  setGameModal={setGameModal}
                  setGameDetail={setGameDetail}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal open={gameModal} onClose={() => setGameModal(false)}>
        <Game gameDetail={gameDetail} />
      </Modal>
    </>
  );
};

export default Games;
