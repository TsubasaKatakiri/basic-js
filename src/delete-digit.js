const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  if(n < 10) return n;
  let nStringArr = n.toString().split('');
  for(let i=0; i<nStringArr.length; i++){
    let operArr = [...nStringArr];
    let testNumber = [...operArr.slice(0, i), ...operArr.slice(i + 1)].join('');
    if(max < +testNumber) max = +testNumber;
  }
  return max;
}

module.exports = {
  deleteDigit
};
