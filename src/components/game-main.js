import React from 'react';

// imports styling
import './game-main.css';

export default function Start(props) {
    return (
        <div className="mainGame">
        <header>
            <nav>
				<ul className="clearfix">
					<li> <button className="what" onClick={props.onClick}>What ?</button> </li>
					<li> <button className="new" href="#">+ New Game</button> </li>
				</ul>
			</nav>
        </header>

        <h1> Hot or Cold? </h1>

        <section className="game">

        <h2 id="feedback">Make your Guess!</h2>

        <form>
            <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required=""/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>

        <p>Guess #<span id="count">0</span>!</p>

        <ul id="guessList" className="guessBox clearfix"></ul>

        </section>

        //<button onClick={props.onClick}> Go back </button>

        </div>

    );
}
