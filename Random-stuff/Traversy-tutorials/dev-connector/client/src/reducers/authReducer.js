import { TEST123 } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST123:
      return {
        ...initialState,
        user: action.payload
      };

    default:
      return state;
  }
}
