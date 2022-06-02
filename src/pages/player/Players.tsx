import { PlayerCard } from "@components";
import { Row, Col } from "@ui";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayersAction } from "store/actions/player.actions";
import { RootState } from "store";

const Players = () => {
  const { players } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayersAction("?_sort=first_name&_order=ASC"));
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
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Players;
