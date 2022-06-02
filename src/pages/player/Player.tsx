import {
  Button,
  ButtonGroup,
  Chip,
  Col,
  DateInput,
  FileInput,
  Input,
  NumberInput,
  Row,
  Toggle,
} from "@ui";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "store";
import {
  addPlayerAction,
  deletePlayerAction,
  getPlayersAction,
  updatePlayerAction,
} from "store/actions/player.actions";
import "./Player.scss";

type playerDetail = {
  playerDetail?: number | null;
};
type PlayerType = {
  id: number;
  first_name: string;
  last_name: string;
  dob: string;
  age: number;
  phone_number: string;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  avatar: string;
};

const Player = ({ playerDetail }: playerDetail) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { players } = useSelector((state: RootState) => state.player);
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
    avatar: "",
  });

  useEffect(() => {
    if (params && params.playerId && players.length) {
      // GET A SINGLE PLAYER FROM THE PLAYERS STATE
      const [player] = players.filter((pl: any) => pl.id === Number(params.playerId));
      setPlayerData(player);
    }
  }, [players, params]);

  /**
   * SUBMITS PLAYER FORM DATA
   * @param e Form Event
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { elements } = e.target;
    const data = {
      dob: elements["dob"].value,
      id: Number(elements["id"].value),
      age: elements["age"].value,
      avatar: elements["avatar"].value,
      last_name: elements["last_name"].value,
      updated_at: dayjs().format("YYYY-MM-DD"),
      first_name: elements["first_name"].value,
      phone_number: elements["phone_number"].value,
      is_active: elements["is_active"].value === "on" ? true : false,
    };
    if(JSON.stringify(playerData) === JSON.stringify(data)){
      return navigate("/players");
    }
    if (elements["id"].value === "0") {
      // CREATE A NEW PLAYER
      dispatch(addPlayerAction(data));
    } else {
      // UPDATE A EXISTING PLAYER
      dispatch(updatePlayerAction(data));
    }
    dispatch(getPlayersAction(""));
    navigate("/players")
  };

  /**
   * handles all input event change value
   * @param e HTML input element event
   */
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setPlayerData({ ...playerData, [name]: value });
  };
  /**
   * handles toggle individually
   * @param value boolean
   */
  const handleIsActive = (value: boolean) => {
    setPlayerData({ ...playerData, is_active: value });
  };

  const handleDeletePlayer = async (playerId:number) => {
    await Promise.all([
      dispatch(deletePlayerAction(playerId)),
      dispatch(getPlayersAction("?_sort=is_active,first_name&_order=DESC,ASC"))
    ])
  }
  return (
    <form className="single-player-container" onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={playerData.id || 0} />
      <Row justify="space-between" align="flex-start">
        {!!playerData.id ? (
          <Chip onClose={() => {handleDeletePlayer(playerData.id);navigate("/players")}} image={playerData.avatar}>
            {`${playerData.first_name} ${playerData.last_name}`}
          </Chip>
        ):(
          <div></div>
        )}
        <ButtonGroup>
        <Button type="button" onClick={() => navigate("/players")}>Go Back</Button>
        <Button type="submit">{playerData.id ? "    Update    " : "    Create    "}</Button>
        </ButtonGroup>
      </Row>
      <div className="input-container">
        <Row align="flex-start">
          <Col sm={12} md={12} lg={7} xl={7} xxl={7}>
            <Input
              label="First Name"
              name="first_name"
              value={playerData.first_name}
              onChange={handleInput}
            />
            <Input
              label="Last Name"
              name="last_name"
              value={playerData.last_name}
              onChange={handleInput}
            />
            <Input
              label="Phone Number"
              name="phone_number"
              value={playerData.phone_number}
              onChange={handleInput}
            />
            <DateInput
              label="Joined Date"
              name="dob"
              value={dayjs(playerData.dob).format("YYYY-MM-DD")}
              onChange={handleInput}
            />
          </Col>
          <Col sm={12} md={12} lg={5} xl={5} xxl={5}>
            <NumberInput min="13" max="75" label="Age" name="age" value={playerData.age} onChange={handleInput} />
            <FileInput
              label="Avatar"
              onChange={handleInput}
              preview={playerData.avatar}
            />
            <Input
              label="Avater URL"
              name="avatar"
              value={playerData.avatar}
              onChange={handleInput}
            />
            <Toggle
              name="is_active"
              label="Active"
              defaultChecked={playerData.is_active}
              onChange={handleIsActive}
              onText="Active"
              offText="Deactive"
            />
          </Col>
        </Row>
      </div>
    </form>
  );
};

export default Player;
