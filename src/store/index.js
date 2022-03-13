import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import locationReducer from './reducer';

const rootReducers = combineReducers({locationReducer});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
