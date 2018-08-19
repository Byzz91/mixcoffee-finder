import * as types from './ActionTypes';

export function addDirsPath(path) {
  return {
    type: types.ADD_DIRS_PATH,
    path
  }
}