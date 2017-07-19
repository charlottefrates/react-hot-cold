import React from 'react';


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
                                   <button className="what" href="#"onClick = {props.handler}> What ? </button>

                              </li>


     					<li>
                                   <button className="new" onClick={props.onClick} > + New Game </button>
                              </li>

     				</ul>
     			</nav>

                 <h1> Hot or Cold? </h1>
             </header>
         );



}
