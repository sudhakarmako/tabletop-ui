import { PlayerCard } from "@components";
import { Row, Col } from "@ui";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Players = () => {
  const { players } = useSelector((state: RootState) => state.player);

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
