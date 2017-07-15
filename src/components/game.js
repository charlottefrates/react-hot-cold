import React from 'react';

import What from './game-what';

import './game.css';


export default class Game extends React.Component {
     //specify state
     constructor(props) {
          super(props);
          // have current state to show directions
          this.state = {
               show: 'directions'
          }
     }

     //function to change state
  toogleimage(){
        this.setState({
            show: 'game'
        });
    }


     render() {

          return (
            <What />
          );
     }

}
