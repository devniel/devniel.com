import reducers from '../reducers';

export default function runActions(_actions) {
  let state;
  _actions.forEach(action => {
    const result = reducers(state, action);
    state = result;
  });
  return state;
}
