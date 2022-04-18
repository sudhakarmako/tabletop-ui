import { Chip, Row } from "@ui";
import "./Session.scss";

type sessionDetail = {
  sessionDetail?: number | null;
};

const Session = ({ sessionDetail }: sessionDetail) => {
  return (
    <div className="session-container">
      <Row>
        <Chip>Session: 245</Chip>
      </Row>

      <h2>Lost Ruins of Arnak (2020)</h2>
      <p>
        On an uninhabited island in uncharted seas, explorers have found traces
        of a great civilization. Now you will lead an expedition to explore the
        island, find lost artifacts, and face fearsome guardians, all in a quest
        to learn the island's secrets.
      </p>

      <h2 className="player">
        Players
        <span>
          <i className="bi bi-people"></i>
          10
        </span>
      </h2>
      <Row>
        {Array.apply(null, Array(10)).map(() => (
          <Chip
            image={
              "https://cf.geekdo-images.com/3HkjDovk8Yr2wMumcSUGog__itemrep/img/WE_jrFpy57ekZuiIKFIMpNfXIXQ=/fit-in/246x300/filters:strip_icc()/pic4843622.jpg"
            }
          >
            Player Name
          </Chip>
        ))}
      </Row>
    </div>
  );
};

export default Session;
