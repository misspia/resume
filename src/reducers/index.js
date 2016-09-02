import { combineReducers } from 'redux';
import pokedex from './pokedexReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  pokedex,
  routing: routerReducer
});

export default rootReducer;
