import React, { useState } from "react";
import Slider from "react-slick";

import NovelCard from "./NovelCard";
import EmptyCard from "./EmptyCard";

var slidesToShow = 7;

function getNovelCards() {
  const novels = [
    {"novelThumb": "https://lh4.googleusercontent.com/yyLgG-ihr63HIHlVuoNI7_4jjcqThqYhQzifLiELkPgW86D8tfS2qPUeXDaBuZPXWD0=s0"},
    {"novelThumb": "https://lh4.googleusercontent.com/NwCCU2yFOS--EXxUAT0mq6PGC6kPy6ZtS75-POkmc07TrbbpJED6Jdm0bA3PDokEu2I=s0"},
    {"novelThumb": "https://lh4.googleusercontent.com/rMMBHvol6LHMc_oOUCS2Elqvk0HgMbESxHKll0pX3hSlBSW6Q9HUBCUozVpnkpizCGPg=s0"},
    {"novelThumb": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/58727253-02cd-4dad-9a23-4785b7910054/533154975/my-fairytale-girlfriend-anime-visual-novel-game-screenshot.png"},
    {"novelThumb": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/58727253-02cd-4dad-9a23-4785b7910054/533154975/my-fairytale-girlfriend-anime-visual-novel-game-screenshot.png"},
    {"novelThumb": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/58727253-02cd-4dad-9a23-4785b7910054/533154975/my-fairytale-girlfriend-anime-visual-novel-game-screenshot.png"},
    {"novelThumb": "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/58727253-02cd-4dad-9a23-4785b7910054/533154975/my-fairytale-girlfriend-anime-visual-novel-game-screenshot.png"},
    {"novelThumb": "https://lh4.googleusercontent.com/rMMBHvol6LHMc_oOUCS2Elqvk0HgMbESxHKll0pX3hSlBSW6Q9HUBCUozVpnkpizCGPg=s0"}
  ];
  const novelCards = [];

  novels.forEach((novel) => {
    novelCards.push(<NovelCard novelThumb={novel.novelThumb} />);
  });

  if (novelCards.length < slidesToShow) {
    var cardsLeft = slidesToShow - novels.length;
    for (var i=0; i<cardsLeft; i++) {
      novelCards.push(<EmptyCard />);
    }
  }

  

  return novelCards;
}

function NovelCardSlider() {
  const [display, setDisplay] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow
  };
  return (
    <div className="slider-container">
      <div
        style={{
          width: "97.5%",
          height: "20em",
          display: display ? "block" : "none",
          margin: "0 auto"
        }}
      >
        <Slider {...settings} 
            style={{
                height: "19.3em",
                backgroundColor: "rgba(87, 13, 133, .4)",
                paddingLeft: "1.5em",
                borderRadius: ".9em"
            }}
        >
            {getNovelCards()}
        </Slider>
      </div>
    </div>
  );
}

export default NovelCardSlider;
