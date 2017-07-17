import React from 'react';

import Header from './game-header';

import Feedback from './game-feedback';

import GameForm from './game-form';

import Guess from './game-guess';

import List from './game-list';

// imports styling
import './game-main.css';

export default function Start(props) {
    return (
        <div className="mainGame">
            <Header />
            <h1> Hot or Cold? </h1>
            <section className="game">
                <Feedback />
                <GameForm onChange={guess => this.setState({guess})} />
                <Guess />
                <List />
            </section>
        </div>

    );
}
