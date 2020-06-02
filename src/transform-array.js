/*
  I am not sure that I understood usecases correctly:
  discardDiscarded: {
      input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5],
      output: [1, 2, 3, 4, 5]
  },
  discardDoubled: {
      input: [1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5],
      output: [1, 2, 3, 1337, 4, 5]
  }
  Somehow in first case we've discarded element according to the original array
  (both control sequences influenced the same `1337`), but in the second case, we
  have doubled 1337 and then discarded one of them. So we used the newly generated
  array. So may be [1, 2, 4, 5] should be an expected behaviour in the first case?
 */

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Not array');
  }

  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--double-next':
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (result.length > 0) {
          result.push(result[result.length - 1]);
        }
        break;
      case '--discard-next':
        i += 1;
        // to correctly proccess following case:
        // --discard-next, number, --discard-prev|--double-prev
        // If it finds that the next element after the ignored one is one of the "-prev" commands,
        // it'll jump over this command.
        if (i + 1 < arr.length
            && (arr[i + 1] === '--discard-prev' || arr[i + 1] === '--double-prev')) {
          i += 1;
        }
        break;
      case '--discard-prev':
        result.pop();
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
