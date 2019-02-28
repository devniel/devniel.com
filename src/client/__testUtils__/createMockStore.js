import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const createReduxMockStore = (defaultState = {}) => {
  const store = mockStore(defaultState);
  return store;
};

export default createReduxMockStore;
