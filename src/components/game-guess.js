import React from 'react';

export default function Guess(props) {
    //captures how many times user guesses .lenght
    return (
       <p>Guess #<span id="count">{props.count}</span>!</p>
    );
}
