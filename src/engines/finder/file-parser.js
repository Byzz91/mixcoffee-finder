/**
 * fileParser
 * 
 * @author byzz <eyedroot@gmail.com>
 * @license MIT
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory;
  } else {
    root.fileParser = factory;
  }
})(this, function (pathfull) {
  const fs = window.require('fs');

  if (pathfull instanceof Buffer) {
    pathfull = pathfull.toString();
  }
  pathfull = String(pathfull).trim();

  return fs.stat(pathfull, (error, stats) => {
    return stats;
  });
});