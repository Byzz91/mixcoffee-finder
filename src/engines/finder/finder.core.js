const Seeker = require('dirs-stream');

/**
 * finder.core.js
 * @param {String} path 
 */
module.exports = function (path) {
  let _dirs = []
    , _seek = void 0
    , _isDone = false;

  /**
   * _fStart
   * 
   * @param {String} path 
   */
  function _fStart(path) {
    try {
      console.info('path', path);
      path = (path || '').trim();
      _seek = new Seeker(path).Stream;

      _seek.on('data', (data) => {
        console.log('data', data);
        _dirs.push(data);
      });

      _seek.on('end', () => {
        _isDone = true;
      });
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * Seeker Engines
   */
  return {
    start   : _fStart,
    dirs    : _dirs,
    isDone  : _isDone,
    __seek__: _seek
  };
}