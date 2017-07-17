import React from 'react';

export default function List(props) {
    //shows the array of numbers inputted
    const listOfguesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));


    return (
       <ul id="guessList" className="guessBox clearfix"> {listOfguesses} </ul>
    );
}
