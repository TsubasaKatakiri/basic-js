const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  let resultLine = '';
  let fullResultLine = '';
  let additionLine = '';
  if(additionRepeatTimes) {
    let fullAddition = new Array(additionRepeatTimes);
    fullAddition.fill(typeof addition === 'string' ? addition : String(addition), 0, additionRepeatTimes);
    let addSeparator = additionSeparator ? additionSeparator : '';
    additionLine = fullAddition.join(addSeparator);
  }
  resultLine = str + additionLine;
  if(repeatTimes) {
    let fullLine = new Array(repeatTimes);
    fullLine.fill(resultLine, 0, repeatTimes);
    let mainSeparator = separator ? separator : '';
    fullResultLine = fullLine.join(mainSeparator);
  }
  return fullResultLine;
}

module.exports = {
  repeater
};
