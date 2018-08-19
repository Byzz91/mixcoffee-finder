import { 
  ADD_DIRS_PATH
} from '../actions/ActionTypes';

const initialState = {
  dirsPath: []
};

/**
 * fileExplorer
 * @param {*} state 
 * @param {*} action 
 */
export default function fileExplorer(state = initialState, action) {
  switch (action.type) {
    case ADD_DIRS_PATH:
      return {
        ...state,
        dirsPath: [...state.dirsPath, action.path]
        // dirsPath: state.dirsPath.concat(action.path)
      }
    default:
      return state;
  }
}