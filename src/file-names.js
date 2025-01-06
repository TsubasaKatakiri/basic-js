const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = Array.from(new Set(names));
  console.log(uniqueNames);
  let result = [...names];
  for(let i = 0; i < uniqueNames.length; i++){
      let counter = 0;
      for(let j = 0; j < result.length; j++){
          if(result[j] === uniqueNames[i]){
              if(counter === 0) {
                  counter++;
                  continue;
              } else {
                  result[j] = `${result[j]}(${counter})`;
                  counter++;
              }
          } else continue;
      }
  }
  return result;
}

module.exports = {
  renameFiles
};
