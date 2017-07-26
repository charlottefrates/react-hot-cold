import React from 'react';
import {connect} from 'react-redux';

export function List(props) {
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

//ADDITION With for REDUX

const mapStateToProps = state => ({
        guesses: state.guesses
});
export default connect(mapStateToProps)(List);
