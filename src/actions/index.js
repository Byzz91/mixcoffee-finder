import * as types from './ActionTypes';

export function setFileExplorerFocus(isFocus) {
  return {
    type: types.STATUS_FILE_EXPLORER_FOCUS,
    isFocus
  };
}