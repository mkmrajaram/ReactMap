import {
  ADD_SEARCH_LOCATION,
  REMOVE_SEARCH_LOCATION,
  GET_SEARCH_LOCATIONS,
  SET_ACTIVE_LOCATION,
} from './actions';

const initState = {
  activeLocation: {
    latitude: 3.0824123999402806,
    longitude: 101.58307451315368,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    name: 'Subang Jaya',
  },
  locations: [],
};

const locationReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_SEARCH_LOCATION:
      return {
        ...state,
        activeLocation: {...state.activeLocation, ...action.payload},
      };
    case GET_SEARCH_LOCATIONS:
      return {...state, locations: action.payload};
    case SET_ACTIVE_LOCATION:
      return {
        ...state,
        activeLocation: {...state.activeLocation, ...action.payload},
      };
    default:
      return state;
  }
};

export default locationReducer;
