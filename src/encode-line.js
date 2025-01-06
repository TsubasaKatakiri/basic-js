const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let substring = '';
  for(let i=0; i<str.length; i++){
    substring += str[i]
    if(str[i] !== str[i + 1]) {
      result += `${substring.length > 1 ? substring.length : ''}${substring[0]}`;
      substring = '';
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
