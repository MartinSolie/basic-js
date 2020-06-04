module.exports = function getSeason(date) {
  const monthsToSeasons = ['winter', 'winter',
    'spring', 'spring', 'spring',
    'summer', 'summer', 'summer',
    'autumn', 'autumn', 'autumn',
    'winter'];

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]'
      || Number.isNaN(date)) {
    throw Error('Invalid format');
  }

  return monthsToSeasons[date.getMonth()];
};
