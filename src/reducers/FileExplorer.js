import { 
  STATUS_FILE_EXPLORER_FOCUS 
} from '../actions/ActionTypes';

const initialState = {
  isFocus: false
};

/**
 * fileExplorer
 * @param {*} state 
 * @param {*} action 
 */
export default function fileExplorer(state = initialState, action) {
  switch (action.type) {
    case STATUS_FILE_EXPLORER_FOCUS: {
      return {
        isFocus: action.isFocus
      };
    }
    default:
      return state;
  }
}