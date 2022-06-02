import { PlayerCard } from "@components";
import { Row, Col } from "@ui";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Players = () => {
  const { players } = useSelector((state: RootState) => state.player);
  const [currentPlayers, setCurrentPlayers] = useState<number>(0);

  useEffect(() => {
    const cur_player = players.filter((pl:any) => pl.is_active);
    setCurrentPlayers(cur_player.length)
  }, []);
  return (
    <>
      <Row justify={"space-between"}>
        <div></div>
        <p>
          Total Players: <strong>{currentPlayers}</strong>
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
