import { combineReducers } from 'redux';
import session from './sessionReducer';
import list from './listReducer';

export default combineReducers({
    session, list
})