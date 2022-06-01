import { Row } from "@ui";
import { Col } from "@ui/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Games.scss";
import { useDispatch, useSelector } from "react-redux";
import { getGame } from "store/slices/game.slice";
import { AppDispatch, RootState } from "store";
import dayjs from "dayjs";

type GameType = {
  gameId?: number | null;
}

type GameData = {
  id: number,
  title: string,
  short_desc: string,
  body: string,
  thumb: string,
  authour: string,
  created_at: string,
  updated_at: string,
  is_active: boolean,
  slider: [{id:number, img_url:string}] | []
}

const Game = ({ gameId }: GameType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [gameData, setGameData] = useState<GameData>({
    id: 0,
    title: "",
    short_desc: "",
    body: "",
    thumb: "",
    authour: "",
    created_at: "",
    updated_at: "",
    is_active: false,
    slider: []
  });
  const {games} = useSelector((state:RootState) => state.game )
  useEffect(() => {
    if(gameId && games.length){
      const [player] = games.filter((gm:any) => gm.id === gameId);
      setGameData(player);
    }
  }, [gameId, games]);


  console.log("gameData", gameData);
  
  return (
    <Row align="flex-start">
      <Col sm={12} md={12} lg={6} xl={5} xxl={5}>
        <div className="game-swiper-container">
          <Swiper
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="gameSlider"
          >
            {gameData.slider.map(slider => (
              <SwiperSlide key={slider.id}>
              <img
                alt={slider.img_url}
                src={slider.img_url}
              />
            </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbs Swiper -> store swiper instance */}
          {/* It is also required to set watchSlidesProgress prop */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="gameThumbs"
          >
            {gameData.slider.map(slider => (
              <SwiperSlide key={slider.id}>
              <img
                alt={slider.img_url}
                src={slider.img_url}
              />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Col>
      <Col sm={12} md={12} lg={6} xl={7} xxl={7}>
        <div className="game-container">
          <h2 className="game-title">{gameData.title}</h2>
          <div className="game-body">
            <h2 className="description">Description</h2>
            {gameData.body}

            <ul className="game-meta">
              <li><strong>Authour : </strong>{gameData.authour}</li>
              <li><strong>Created on : </strong>{dayjs(gameData.created_at).format("DD-MMM-YYYY")}</li>
              <li><strong>Active : </strong>{gameData.is_active ? "Yes" : "No"}</li>
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Game;
