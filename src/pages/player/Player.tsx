import { Button, Chip, Col, DateInput, FileInput, Input, NumberInput, Row, Select } from "@ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import "./Player.scss";

type playerDetail = {
  playerDetail?: number | null;
};
type PlayerType = {
    id: number,
    first_name: string,
    last_name: string,
    dob: string,
    age: number,
    phone_number: string,
    created_at: string,
    updated_at: string,
    is_active: boolean,
    avatar: string
  };

const Player = ({ playerDetail }: playerDetail) => {
const [playerData, setPlayerData] = useState<PlayerType>({
  id: 0,
  first_name: "",
  last_name: "",
  dob: "",
  age: 0,
  phone_number: "",
  created_at: "",
  updated_at: "",
  is_active: false,
  avatar: ""
});
const {players} = useSelector((state:RootState) => state.player);

useEffect(() => {
  if(playerDetail && players.length){
    const [player] = players.filter((pl:any) => pl.id === playerDetail);
    setPlayerData(player);
  }
}, [playerDetail, players]);
  return (
    <div className="single-player-container">
      <Row justify="space-between" align="flex-start">
        <Chip image={playerData.avatar}>
          {`${playerData.first_name} ${playerData.last_name}`}
        </Chip>
        <Button>Update</Button>
      </Row>
      <Row align="flex-start">
        <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
          <div className="input-container">
            <Input label="First Name" name="fname" value={playerData.first_name} />
            <Input label="Last Name" name="lname" value={playerData.last_name} />
            <Input label="Phone Number" name="phone" value={playerData.phone_number} />
            <DateInput
              label="Joined Date"
              name="joinedData"
              value={dayjs(playerData.dob).format('YYYY-MM-DD')}
            />
          </div>
        </Col>
        <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
          <div className="input-container">
            <NumberInput label="Age" name="age" value={playerData.age} />
            <FileInput label="Avatar" />
            <Input label="Avater URL" name="avatarUrl" value={playerData.avatar} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Player;
