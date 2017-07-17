import React from 'react';

//imports What module to give information about the game
import What from './game-what';

//imports start game module
import Start from './game-main';


export default function Header(props) {
    return (
        <header>
            <nav>
				<ul className="clearfix">
					<li> <button className="what" >What ?</button> </li>
					<li> <button className="new" href="#">+ New Game</button> </li>
				</ul>
			</nav>
            <h1> Hot or Cold? </h1>
        </header>
    );
}
