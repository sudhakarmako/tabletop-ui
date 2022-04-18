import { Chip, Col, DateInput, FileInput, Input, Row, Select } from "@ui";
import { useState } from "react";
import "./Player.scss";

type PlayerType = {
  playerDetail?: number | null;
};

const Player = ({ playerDetail }: PlayerType) => {
  const [ageSelect, setAgeSelect] = useState("");
  return (
    <div className="single-player-container">
      <Row>
        <Chip image="https://randomuser.me/api/portraits/women/90.jpg">
          Gabriella Lambert
        </Chip>
      </Row>
      <Row align="flex-start">
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <div className="input-container">
            <Input label="First Name" name="fname" value="Gabriella" />
            <Input label="Last Name" name="lname" value="Lambert" />
            <Input label="Phone Number" name="phone" value="+07 658 312 387" />
            <DateInput
              label="Joined Date"
              name="joinedData"
              value="2022-03-18"
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
          <div className="input-container">
            <Select
              label="Age"
              name="age"
              onChange={(e) => setAgeSelect(e)}
              value={ageSelect}
              options={[
                { name: "3-5 age", value: "1" },
                { name: "6-13 age", value: "1" },
                { name: "13-18 age", value: "1" },
                { name: "18+ age", value: "1" },
              ]}
            />
            <FileInput label="Avatar" name="avatarUrl" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Player;
