const defaultOptions = {
  separator: '+',
  repeatTimes: 0,
  addition: '',
  additionSeparator: '|',
  additionRepeatTimes: 0,
};

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

  const additionString = simpleRepeater(
    'addition' in options ? String(options.addition) : defaultOptions.addition,
    'additionRepeatTimes' in options ? options.additionRepeatTimes : defaultOptions.additionRepeatTimes,
    'additionSeparator' in options ? options.additionSeparator : defaultOptions.additionSeparator,
  );

  return simpleRepeater(
    src + additionString,
    'repeatTimes' in options ? options.repeatTimes : defaultOptions.repeatTimes,
    'separator' in options ? options.separator : defaultOptions.separator,
  );
};
