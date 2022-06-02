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
    dispatch(getPlayersAction("?_sort=first_name&_order=ASC"))
  }, []);
  return (
    <>
      <Row justify={"space-between"}>
        <div></div>
        <p>
          Total Players: <strong>{players.length}</strong>
        </p>
      </Row>
      <div className="player-margin">
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
      </div>
      <Modal open={playerModal} onClose={() => setPlayerModal(false)}>
        <Player playerDetail={playerDetail} closeAfterSubmit={() => setPlayerModal(false)} />
      </Modal>
    </>
  );
};

export default Players;
