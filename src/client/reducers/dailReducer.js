import { GET_DAIL } from '../actions/Dail.actions';

export default function(state = null, action) {
  switch (action.type) {
    case GET_DAIL:
      return action.data;
    default:
      return state;
  }
}
