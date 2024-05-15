import React, {Component} from 'react';

import MenuTop from './MenuTop';
import Slider from './Slider';
import GenreContainer from './GenreContainer';

export default class HomePage extends Component {
    render () {
        return (
            <div>
                <MenuTop />
                <Slider />
                <div style={{width: "100%", height: "50em"}}></div>
                <div>
                    <GenreContainer genreTitle="CONTINUE PLAYING"/>
                    <GenreContainer genreTitle="NOVELS YOU SHOULD LIKE"/>
                    <GenreContainer genreTitle="TOP 10 NOVELS"/>
                    <GenreContainer genreTitle="HORROR NOVELS"/>
                    <GenreContainer genreTitle="COMEDY NOVELS"/>
                </div>
            </div>
        );
    }
}
