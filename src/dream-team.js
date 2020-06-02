
module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const isStr = (el) => typeof el === 'string';
  const removeWhitespaces = (el) => el.trim();
  const getFirstLetter = (name) => name.charAt(0).toUpperCase();

  return members.filter(isStr)
    .map(removeWhitespaces)
    .map(getFirstLetter)
    .sort()
    .join('');
};
