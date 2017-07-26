import React from 'react';
import {connect} from 'react-redux';

export function Guess(props) {
    //captures how many times user guesses .lenght
    return (
       <p>Guess #<span id="count">{props.count}</span>!</p>
    );
}

const mapStateToProps = state => ({
    count: state.guesses.length
});

export default connect(mapStateToProps)(Guess);
