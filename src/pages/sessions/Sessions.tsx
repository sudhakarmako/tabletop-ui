import { PlayerCard, SessionCard, SessionTitle } from "@components";
import { Chip, Row, Col} from "@ui";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getPlayersAction } from "store/actions/player.actions";

const Sessions = () => {
  const {players} = useSelector((state:RootState) => state.player)
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPlayersAction(""))
  }, []);
  return (
    <>
      <Row justify={"space-between"}>
        <Row>
          <Chip
            image={
              "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
            }
          >
            Raiders of the North Sea
          </Chip>
        </Row>
        <p>
          Current Session: <strong>435</strong>
        </p>
      </Row>
      <div className="session-margin_top">
      <Row align="flex-start">
        <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
          {Array.apply(null, Array(10)).map(() => (
            <SessionCard
              sessionId={2452}
              players="24"
              startTime="12:24 PM"
              stopTime="14.35 PM"
            />
          ))}
        </Col>
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <SessionTitle />
          <Row justify="space-evenly">
          {players.map((player, key) => (
              <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                <PlayerCard
                  key={key}
                  player={player}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default Sessions;
