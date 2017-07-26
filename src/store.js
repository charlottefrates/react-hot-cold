import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import GameState from './reducers';


export default createStore(GameState,applyMiddleware(thunk));
