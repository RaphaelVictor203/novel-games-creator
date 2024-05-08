import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './css/Carousel.css';
import './css/CarouselImage.css';

function Slider() {
    return (
        <Carousel id="carousel">
            <Carousel.Item>
                <img
                className="carousel-image"
                src="https://c4.wallpaperflare.com/wallpaper/343/133/306/background-art-anime-landscape-street-sky-hd-wallpaper-preview.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-image"
                src="https://c4.wallpaperflare.com/wallpaper/345/798/525/background-art-love-money-rock-n-roll-arsenixc-room-light-effects-hd-wallpaper-preview.jpg"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="carousel-image"
                src="https://c4.wallpaperflare.com/wallpaper/665/103/672/landscape-artwork-visual-novel-building-light-effects-hd-wallpaper-preview.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    ); 
}

export default Slider
