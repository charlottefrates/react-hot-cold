import React from 'react';

import Header from './game-header';

import Feedback from './game-feedback';

import Guess from './game-guess';

import List from './game-list';


// imports styling
import './game-main.css';

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.floor(Math.random() * 100) + 1,
        };
    }

    newGame() {
		this.setState({
			guesses: [],
			feedback: 'Guess a number!',
			answer: Math.floor(Math.random() * 100) + 1,
		});
	}


    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        //shows the feedback text based on value entered
        let feedback;
        if (difference >= 50) {
            feedback = 'You are Ice Cold...';
        }
        else if (difference >= 40) {
            feedback = 'You are Cold...';
        }
        else if (difference >= 5) {
            feedback = 'You are Warm';
        }
        else if (difference >= 1) {
            feedback = 'You are Hot!';
        }
        else {
            feedback = 'You RIGHT, YAY!';
        }

        //updates current state
        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }

    render(props) {
        return (
            <div className="mainGame">
                <Header onClick={e => this.newGame()}/>
                <section className="game">
                    <Feedback feedback={this.state.feedback} onGuess={(guess) => this.guess(guess)}/>
                    <Guess count={this.state.guesses.length}/>
                    <List guesses={this.state.guesses}/>
                </section>
            </div>

        );
    }
}
