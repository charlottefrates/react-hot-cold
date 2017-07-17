import React from 'react';

export default class GameForm extends React.Component {
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

/*
export default function GameForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required="" onChange={e => props.onChange(e.target.value)}/>
        <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
*/
