import * as types from '../constants/actionTypes';
import * as service from '../services/pokedexService';

// example of a thunk using the redux-thunk middleware
export function getPokemonSuccess(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.GET_POKEMON,
      dateModified: dateHelper.getFormattedDateTime(),
      settings
    });
  };
}

export function getPokemon(id) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings

    return dispatch(service.getPokeData(id)).then((response) => {
      return getPokemonSuccess(response);
    });
  };
}

export function getSpecies(id)) {
  return {
    type: types.GET_SPECIES,
    dateModified: dateHelper.getFormattedDateTime(),
    settings,
    fieldName,
    value
  };
}
