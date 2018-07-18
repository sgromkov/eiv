import { combineReducers } from 'redux';

const query = (state = '', action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return action.query
    default:
      return state;
  }
};

const list = (state = [], action) => state.slice();

const app = combineReducers({ query, list });

export default app;