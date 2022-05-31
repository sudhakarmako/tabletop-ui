import { PlayerCard, SessionCard, SessionTitle } from "@components";
import { Chip, Row, Col, Modal } from "@ui";
import { Player } from "pages/player";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { getSessionsAction } from "store/actions/session.actions";

import Session from "./Session";

const Sessions = () => {
  const {sessions} = useSelector((state:RootState) => state.session)

  const [sessionModal, setSessionModal] = useState<boolean>(false);
  const [sessionDetail, setSessionDetail] = useState<number | null>(null);
  const [playerModal, setPlayerModal] = useState<boolean>(false);
  const [playerDetail, setPlayerDetail] = useState<number | null>(null);
  const dispatch = useDispatch();

  console.log("session", sessions);
  
  useEffect(() => {
    dispatch(getSessionsAction("?_embed=session"))
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
      <br />
      <br />
      <Row align="flex-start">
        <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
          {Array.apply(null, Array(10)).map(() => (
            <SessionCard
              sessionId={2452}
              players="24"
              startTime="12:24 PM"
              stopTime="14.35 PM"
              setSessionModal={setSessionModal}
              setSessionDetail={setSessionDetail}
            />
          ))}
        </Col>
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <SessionTitle />
          <Row justify="space-evenly">
            {Array.apply(null, Array(10)).map(() => (
              <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                <PlayerCard
                  setPlayerModal={setPlayerModal}
                  setPlayerDetail={setPlayerDetail}
                  playerId={1}
                  avatarUrl={
                    "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
                  }
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Modal open={sessionModal} onClose={() => setSessionModal(false)}>
        <Session sessionDetail={sessionDetail} />
      </Modal>
      <Modal open={playerModal} onClose={() => setPlayerModal(false)}>
        <Player playerDetail={playerDetail}/>
      </Modal>
    </>
  );
};

export default Sessions;
