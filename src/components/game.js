import React from 'react';
import {connect} from 'react-redux';

//imports What module to give information about the game
import What from './game-what';

//imports start game module
import Start from './game-main';

import {togglegame} from '../actions'

// imports styling
import './game.css';


export class Game extends React.Component {
     /*
     //specify state
     constructor(props) {
          super(props);
          // have current state to show directions
          this.state = {
               show: 'directions',
          }

          //Parent bind property
          this.handler = this.handler.bind(this);
     }


     handler(e) {
        e.preventDefault()
        this.setState({
          show: 'directions'
        })
      }

      */

     //function to change state
     togglegame() {
          this.props.dispatch(togglegame());
          /*
          this.setState({
               show: 'game'
          });
          */
     }


     render() {

          //conditions to capture both states
          //shows 'What' the game is about and 'Starts' the game
          if (!this.props.showGame) {
               //shows directions for the game
               return <What onClick={e => this.togglegame()}/>;
          } else {
               //shows main game component and added bound handler
               return <Start onClick={e => this.togglegame()} />;
          }

     }

}


const mapStateToProps = state => ({
     showGame:state.showGame
});

export default connect(mapStateToProps)(Game);
