const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';
const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }

  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case DOUBLE_PREV:
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      case DISCARD_NEXT:
        i += 1;
        if (i + 1 < arr.length
            && (arr[i + 1] === DISCARD_PREV || arr[i + 1] === DOUBLE_PREV)) {
          i += 1;
        }
        break;
      case DISCARD_PREV:
        result.pop();
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
