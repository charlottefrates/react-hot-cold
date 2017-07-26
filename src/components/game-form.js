import React from 'react';
import {connect} from 'react-redux';

import {makeGuess} from '../actions';

/* OPTION 1 without REDUX
export default class GameForm extends React.Component {
    //uncontrolled input
    onGuess(event) {
        event.preventDefault();
        if (this.props.onGuess) {
            const value = this.input.value;
            console.log(value);
            this.props.onGuess(value);
        }
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"

                    //As soon as the component is rendered, a callback passed to the ref prop will be called,
                    //passing the corresponding DOM node as an argument to the callback.
                    //This allows you to directly access the DOM node within your component.
                    ref={input => this.input = input}
                    />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
            </form>
        );
    }
};
*/

export class GuessForm extends React.Component {
    submitGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
    }

    render() {
        return (
            <form onSubmit={e => this.submitGuess(e)}>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter your Guess" required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
