import { createStore } from 'redux';
import app from './reducers';
import list from 'eiv-dictionary';

const configureStore = () => {
  const store = createStore(app, { list });

  return store;
};

export default configureStore;