const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const filteredMembers = members.filter(item => typeof item === 'string');
  if (filteredMembers.length === 0) return false;
  return filteredMembers.map((item) => item.trim().slice(0, 1).toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};
