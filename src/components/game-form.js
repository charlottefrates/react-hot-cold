import React from 'react';

export default function GameForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required="" onChange={e => props.onChange(e.target.value)}/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
