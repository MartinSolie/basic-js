
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const isStr = (el) => typeof el === 'string';
  const getFirstLetter = (name) => name.trim().charAt(0).toUpperCase();
  const getNamesFirstLetters = (acc, curr) => {
    if (isStr(curr)) {
      acc.push(getFirstLetter(curr));
    }
    return acc;
  };

  return members.reduce(getNamesFirstLetters, []).sort().join('');
};
