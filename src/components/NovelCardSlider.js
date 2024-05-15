import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';

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
  function getSlidesToShow() {
    if (window.isDesktopOrLaptop) {
      return 7;
    } else 
    if (window.isSmallScreen) {
      return 6;
    } else 
    if (window.isSmallerScreen) {
      return 5;
    } else 
    if (window.isSmallerScreen_1) {
      return 3;
    } else 
    if (window.isBigScreen) {
      return 2;
    } else 
    if (window.isTabletOrMobile) {
      return 2;
    } else
    if (window.isPortrait) {
      return 2;
    } else
    if (window.isRetina) {
      return 2;
    }
  }

  useEffect(() => {
    function handleResize() {
      getSlidesToShow();
    }

    // Attach the event listener to the window object
    window.addEventListener('resize', handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var slidesToShow = getSlidesToShow();

  const [display, setDisplay] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    arrows: useMediaQuery({query: '(min-width: 600px)'})
  };
  return (
    <div>
      <MediaQuery maxWidth="690px">
          <div
            style={{
              width: "97.5%",
              height: "15.7em",
              display: display ? "block" : "none",
              margin: "0 auto"
            }}
          >
            <Slider {...settings} 
                style={{
                    height: "96%",
                    backgroundColor: "rgba(87, 13, 133, .4)",
                    paddingLeft: "1.5em",
                    borderRadius: ".9em"
                }}
            >
                {getNovelCards()}
            </Slider>
          </div>
      </MediaQuery>

      <MediaQuery minWidth={700}>
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
                    height: "96%",
                    backgroundColor: "rgba(87, 13, 133, .4)",
                    paddingLeft: "1.5em",
                    borderRadius: ".9em"
                }}
            >
                {getNovelCards()}
            </Slider>
          </div>
      </MediaQuery>
    </div>
  );
}

export default NovelCardSlider;
