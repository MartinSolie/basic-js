module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    const maxChildDepth = arr.reduce(this.getMaxChildDepthReducer(), 0);
    return maxChildDepth + 1;
  }

  getMaxChildDepthReducer() {
    return (max, current) => Math.max(max, this.calculateDepth(current));
  }
};
