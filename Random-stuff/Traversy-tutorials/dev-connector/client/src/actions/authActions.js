import { TEST123 } from './types';
// TEST

export const test123 = (userData) => {
  return {
    type: TEST123,
    payload: userData
  };
};
