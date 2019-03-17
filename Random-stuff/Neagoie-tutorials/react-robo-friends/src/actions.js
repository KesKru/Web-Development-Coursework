import {
  //Change searchfiled constants
  CHANGE_SEARCHFIELD,
  //Get robots asyncs constants
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

//Synch actions
export const setSearchField = (text) => ({
  type: CHANGE_SEARCHFIELD,
  payload: text
});

//Asynch actions, rturn a functiopn,- think takes cre of the rest
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
};
