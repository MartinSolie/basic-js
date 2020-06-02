function applyDefaultsIfNeeded(rawOptions) {
  return {
    separator: 'separator' in rawOptions ? rawOptions.separator : '+',
    repeatTimes: 'repeatTimes' in rawOptions ? rawOptions.repeatTimes : 0,
    addition: 'addition' in rawOptions ? `${rawOptions.addition}` : '',
    additionSeparator: 'additionSeparator' in rawOptions ? rawOptions.additionSeparator : '|',
    additionRepeatTimes: 'additionRepeatTimes' in rawOptions ? rawOptions.additionRepeatTimes : 0,
  };
}

function simpleRepeater(str, times, separator) {
  if (times < 1) {
    return '';
  }

  let result = '';
  for (let i = 0; i < times - 1; i += 1) {
    result += str + separator;
  }
  return result + str;
}

module.exports = function repeater(str, options) {
  const src = `${str}`;
  const so = applyDefaultsIfNeeded(options);

  const additionString = simpleRepeater(so.addition, so.additionRepeatTimes, so.additionSeparator);
  return simpleRepeater(src + additionString, so.repeatTimes, so.separator);

  // Or like this, then we do not need `simpleRepeater` function. However seems to be less efficient
  // const additionString = Array(so.additionRepeatTimes)
  //   .fill(so.addition)
  //   .join(so.additionSeparator);
  // return Array(so.repeatTimes).fill(src + additionString).join(so.separator);
};
