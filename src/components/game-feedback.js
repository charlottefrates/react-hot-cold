import React from 'react';
import {connect} from 'react-redux';

import GameForm from './game-form';

/* OPTION 1 WITHOUT REDUX
export default function Feedback(props) {
    return (
      <div>
       <h2 id="feedback">{props.feedback}</h2>
       <GameForm onGuess={props.onGuess} />
       </div>
   )
}
*/

export function GuessSection(props) {
    return (
         <div>
          <h2 id="feedback">{props.feedback}</h2>
          <GameForm />
          </div>
    );
}

const mapStateToProps = state => ({
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);
