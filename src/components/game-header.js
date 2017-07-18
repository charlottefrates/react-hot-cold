import React from 'react';


//imports What module to give information about the game
import What from './game-what';
/*
export default function Header(props) {
    return (
        <header>
            <nav>
				<ul className="clearfix">
					<li> <button className="what" >What ?</button> </li>
					<li> <button className="new" >+ New Game</button> </li>
				</ul>
			</nav>
            <h1> Hot or Cold? </h1>
        </header>
    );
}

*/
export default function Header(props) {


      return (
             <header>

                 <nav>
     				<ul className="clearfix">

     					<li>
                                   <button className="new" onClick={props.onClick} > + New Game </button>
                              </li>

     				</ul>
     			</nav>

                 <h1> Hot or Cold? </h1>
             </header>
         );



}
