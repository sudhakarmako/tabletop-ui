import { Row } from "@ui";
import { Col } from "@ui/Col";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./Games.scss";

type GameType = {
  gameDetail?: number | null;
};

const Game = ({ gameDetail }: GameType) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

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
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__imagepage/img/eImUMUWzDaUiHkUBzOL9EFdQY10=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5674958.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/wWwvUtCOcZuLsFgoO2gDlQ__imagepage/img/FJvvPCiLpEJPwDyhW49aAbTfuRU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5661238.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/0k66hPvjps5bdM6_EZ75_A__imagepage/img/IaX4C1C58mVqOY92Exad5ZaHKdo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5671180.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/xFPW6KSXXKwNPXRXSguTLQ__imagepage/img/I-ZofrM0ToEmlenXq91IdSA8cIk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5683170.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/azwR5QLPlPErGXALgHxdGg__imagepage/img/zdFTq0pMdCgApkr2XRnMeHgDU1o=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5712024.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/1ddVO-wLGpZD3QuzAXLgJA__imagepage/img/ouaJU30qvhHRyastUxZ2hei76Qk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5723467.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/QJTxWC1pqrQGuz5ynnFgkg__imagepage/img/kDpl57Y1Wf8nKnt-eH8grF_7y7Q=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5719924.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/EsTP6q6zLLiRKFqIwyGAbw__imagepage/img/Y57T2NYNL_O5I013yu2K2ESz4y4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5702515.jpg"
              />
            </SwiperSlide>
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
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__imagepage/img/eImUMUWzDaUiHkUBzOL9EFdQY10=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5674958.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/wWwvUtCOcZuLsFgoO2gDlQ__imagepage/img/FJvvPCiLpEJPwDyhW49aAbTfuRU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5661238.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/0k66hPvjps5bdM6_EZ75_A__imagepage/img/IaX4C1C58mVqOY92Exad5ZaHKdo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5671180.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/xFPW6KSXXKwNPXRXSguTLQ__imagepage/img/I-ZofrM0ToEmlenXq91IdSA8cIk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5683170.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/azwR5QLPlPErGXALgHxdGg__imagepage/img/zdFTq0pMdCgApkr2XRnMeHgDU1o=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5712024.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/1ddVO-wLGpZD3QuzAXLgJA__imagepage/img/ouaJU30qvhHRyastUxZ2hei76Qk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5723467.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/QJTxWC1pqrQGuz5ynnFgkg__imagepage/img/kDpl57Y1Wf8nKnt-eH8grF_7y7Q=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5719924.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt="gameicon"
                src="https://cf.geekdo-images.com/EsTP6q6zLLiRKFqIwyGAbw__imagepage/img/Y57T2NYNL_O5I013yu2K2ESz4y4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5702515.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Col>
      <Col sm={12} md={12} lg={6} xl={7} xxl={7}>
        <div className="game-container">
          <h2 className="game-title">Lost Ruins of Arnak (2020)</h2>
          <div className="game-body">
            <h2 className="description">Description</h2>
            <p>
              On an uninhabited island in uncharted seas, explorers have found
              traces of a great civilization. Now you will lead an expedition to
              explore the island, find lost artifacts, and face fearsome
              guardians, all in a quest to learn the island's secrets.
            </p>
            <p>
              <strong>Lost Ruins of Arnak</strong> combines deck-building and
              worker placement in a game of exploration, resource management,
              and discovery. In addition to traditional deck-builder effects,
              cards can also be used to place workers, and new worker actions
              become available as players explore the island. Some of these
              actions require resources instead of workers, so building a solid
              resource base will be essential. You are limited to only one
              action per turn, so make your choice carefully... what action will
              benefit you most now? And what can you afford to do later...
              assuming someone else doesn't take the action first!?
            </p>
            <p>
              Decks are small, and randomness in the game is heavily mitigated
              by the wealth of tactical decisions offered on the game board.
              With a variety of worker actions, artifacts, and equipment cards,
              the set-up for each game will be unique, encouraging players to
              explore new strategies to meet the challenge.
            </p>
            <p>Discover the Lost Ruins of Arnak</p>
            <p>—description from the publisher</p>
            <p>
              <ol>
                <li>2022 As d'Or - Jeu de l'Année Expert Nominee</li>
                <li>2021 Nederlandse Spellenprijs Best Expert Game Nominee</li>
                <li>2021 Kennerspiel des Jahres Nominee</li>
                <li>2021 International Gamers Award Multi-player Nominee</li>
                <li>2021 Graf Ludo Best Family Game Graphics Nominee</li>
                <li>2021 Gra Roku Player's Award</li>
                <li>2021 Gra Roku Best Two Player Game Nominee</li>
                <li>2021 Gra Roku Advanced Game of the Year Nominee</li>
                <li>
                  2021 Deutscher Spiele Preis Best Family/Adult Game Winner
                </li>
                <li>
                  2021 Bulgarian Board Game Awards Expert Game of the Year
                  Nominee
                </li>
                <li>2020 Golden Geek Most Innovative Board Game Nominee</li>
                <li>2020 Golden Geek Medium Game of the Year Winner</li>
                <li>2020 Golden Geek Medium Game of the Year Nominee</li>
                <li>2020 Golden Geek Best Thematic Board Game Nominee</li>
                <li>2020 Golden Geek Best Solo Board Game Nominee</li>
                <li>
                  2020 Golden Geek Best Board Game Artwork & Presentation
                  Nominee
                </li>
                <li>2020 Cardboard Republic Immersionist Laurel Nominee</li>
                <li>2020 Board Game Quest Awards Game of the Year Nominee</li>
                <li>
                  2020 Board Game Quest Awards Best Strategy/Euro Game Nominee
                </li>
              </ol>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Game;
