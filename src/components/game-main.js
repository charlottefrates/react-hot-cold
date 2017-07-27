import React from 'react';

import Header from './game-header';

import Feedback from './game-feedback';

import Guess from './game-guess';

import List from './game-list';


// imports styling
import './game-main.css';

/* OPTION 1 WITHOUT REDUX
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
            feedback = 'You got it RIGHT, YAY!';
        }

        //updates current state
        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });

        if(feedback === 'You got it RIGHT, YAY!'){
            //code before the pause
            setTimeout(function(){
                //do what you need here
                alert('Click "New Game" if you want to play again')
            }, 800);

        }
    }

    render() {
        return (
            <div className="mainGame" >
                <Header onClick={e => this.newGame()} handler = {this.props.handler}/>
                <section className="game">
                    <Feedback feedback={this.state.feedback} onGuess={(guess) => this.guess(guess)}/>
                    <Guess count={this.state.guesses.length}/>
                    <List guesses={this.state.guesses}/>
                </section>
            </div>

        );
    }
}

*/

export default function Game() {
    return (
        <div>
          <Header />
           <section className="game">
               <Feedback />
              <Guess />
             <List />
           </section>
        </div>
    );
};
