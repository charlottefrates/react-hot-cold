import React from 'react';

//imports What module to give information about the game
import What from './game-what';

//imports start game module
import Start from './game-main';

// imports styling
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
  tooglegame(){
        this.setState({
            show: 'game'
        });
    }

    //function to change state again
  showInfoAgain(){
    this.setState({
            show: 'directions'
        });

  }


     render() {

       //conditions to capture both states
       if (this.state.show === 'directions') {
            return <What onClick={e => this.tooglegame()}/>;
        }
        else if (this.state.show === 'game') {
            return <Start onClick={e => this.showInfoAgain()}/>;
        }

    }

}
