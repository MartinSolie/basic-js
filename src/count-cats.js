module.exports = function countCats(backyard) {
  // Shorter and more readable as to me, but takes longer to run, consumes more space
  // const isCat = (t) => t === '^^';
  // return backyard.flat().filter(isCat).length;

  let cats = 0;
  for (const row of backyard) {
    for (const e of row) {
      if (e === '^^') {
        cats++;
      }
    }
  }
  return cats;
};
