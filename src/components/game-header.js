import React from 'react';
//import {connect} from 'react-redux';

//import {newGame} from '../actions';



export default function Header(props) {


      return (
             <header>

                 <nav>
     				<ul className="clearfix">

                              <li>
                                   <button className="what" href="#" onClick={props.handler}> What ? </button>

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

/*
export class Header extends React.Component {
    newGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }


    render(props) {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick = {props.handler}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.newGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(Header)
*/
