import { PlayerCard } from "@components";
import { Modal, Row, Col } from "@ui";
import { useState } from "react";
import Player from "./Player";

const Players = () => {
  const [playerModal, setPlayerModal] = useState<boolean>(false);
  const [playerDetail, setPlayerDetail] = useState<number | null>(null);
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
          Total Players: <strong>234</strong>
        </p>
      </Row>
      <br />
      <br />
      <Row>
        {Array.apply(null, Array(10)).map(() => (
          <Col sm={12} md={6} lg={4} xl={4} xxl={4}>
            <PlayerCard
              playerId={1}
              setPlayerModal={setPlayerModal}
              setPlayerDetail={setPlayerDetail}
              avatarUrl={
                "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
              }
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
