import React from 'react';

export default function Header(props) {
    return (
        <header>
            <nav>
				<ul className="clearfix">
					<li> <button className="what" onClick={props.onClick}>What ?</button> </li>
					<li> <button className="new" href="#">+ New Game</button> </li>
				</ul>
			</nav>
        </header>
    );
}
