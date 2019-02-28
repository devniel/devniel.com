import { createBrowserHistory } from 'history';
import createStore from '../../helpers/createStore';

const createReduxStore = () => {
  const history = createBrowserHistory();
  const store = createStore(history);
  return store;
};

export default createReduxStore;
