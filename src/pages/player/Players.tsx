import { PlayerCard } from "@components";
import { Modal, Row, Col } from "@ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getPlayersAction } from "store/actions/player.actions";
// import games from "./data.json";
import Player from "./Player";

const Players = () => {
  const { player } = useSelector((state: RootState) => state.player);
  const [playerModal, setPlayerModal] = useState<boolean>(false);
  const [playerDetail, setPlayerDetail] = useState<number | null>(null);
  const dispatch = useDispatch();
  console.log("players", player);

  useEffect(() => {
    dispatch(getPlayersAction(""));
  }, []);
  return (
    <>
      <Row justify={"space-between"}>
        <Row>
          {/* <Chip
            image={
              "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
            }
          >
            Raiders of the North Sea
          </Chip> */}
        </Row>
        <p>
          Total Players: <strong>qwer</strong>
        </p>
      </Row>
      <br />
      <br />
      <Row>
        {player.map((player, key) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
              <PlayerCard
                key={key}
                playerId={player}
                setPlayerModal={setPlayerModal}
                setPlayerDetail={setPlayerDetail}
                avatarUrl={
                  "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg" }
                
              />
            </Col>
          );
        })}
      </Row>
      <Modal open={playerModal} onClose={() => setPlayerModal(false)}>
        <Player playerDetail={playerDetail} />
      </Modal>
    </>
  );
};

export default Players;
