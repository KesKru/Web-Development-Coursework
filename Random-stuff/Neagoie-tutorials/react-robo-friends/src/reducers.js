import { combineReducers } from 'redux';
import {
  //Change searchfiled constants
  CHANGE_SEARCHFIELD,
  //Get robots asyncs constants
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

//-----------------------Seacrfield initial state and reducer-----------------------//

const initialStateSearch = {
  searchField: ''
};

const searchRobots = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

//-----------------------Robots initial state and reducer-----------------------//

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ''
};

const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

//-----------------------ROOT REDUCER-----------------------//

export default combineReducers({ searchRobots, requestRobots });
