import React from 'react';

import GameForm from './game-form';

export default function Feedback(props) {
    return (
      <div>
       <h2 id="feedback">{props.feedback}</h2>
       <GameForm onGuess={props.onGuess} />
       </div>
   )
}
