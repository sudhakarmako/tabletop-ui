import { PlayerCard } from "@components";
import { Modal, Row, Col } from "@ui";
import { useEffect, useState } from "react";
import Player from "./Player";
import { useDispatch, useSelector } from "react-redux";
import { getPlayersAction } from "store/actions/player.actions";
import { RootState } from "store";

const Players = () => {
  const [playerModal, setPlayerModal] = useState<boolean>(false);
  const [playerDetail, setPlayerDetail] = useState<number | null>(null);
  const {players} = useSelector((state:RootState) => state.player)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPlayersAction(""))
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
          Total Players: <strong>{players.length}</strong>
        </p>
      </Row>
      <br />
      <br />
      <Row>
        {players.map((player, key) => (
          <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
            <PlayerCard
              key={key}
              player={player}
              setPlayerModal={setPlayerModal}
              setPlayerDetail={setPlayerDetail}
            />
          </Col>
        ))}
      </Row>
      <Modal open={playerModal} onClose={() => setPlayerModal(false)}>
        <Player playerDetail={playerDetail} />
      </Modal>
    </>
  );
};

export default Players;
