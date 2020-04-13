import { CHANGE_QUOTE } from "../actions/types";

const defaultState = {
  loading: true,
  quote: 'Patience is the key',
  author: 'Anonymous'
}

function mainReducer(state = defaultState, action) {
  if(action.type === CHANGE_QUOTE) {
    return { ...state, loading: false, quote: action.quote, author: action.author };
  }
  return state;
}

export default mainReducer;