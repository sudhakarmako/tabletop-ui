import { PlayerCard, SessionCard } from "@components";
import { Chip, Container, Row } from "@ui";
import { Col } from "@ui/Col";

const Sessions = () => {
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
              sessionId="2452"
              players="24"
              startTime="12:24 PM"
              stopTime="14.35 PM"
            />
          ))}
        </Col>
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <Row justify="space-evenly">
            {Array.apply(null, Array(10)).map(() => (
              <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
                <PlayerCard
                  avatarUrl={
                    "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
                  }
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Sessions;
