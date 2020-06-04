// throw new Error('error message');

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number'
        || !Number.isInteger(position)
        || position < 0
        || position > this.getLength() - 1) {
      this.cleanChain();
      throw new Error('Wrong position');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((el) => `( ${el} )`).join('~~');
    this.cleanChain();
    return result;
  },
  cleanChain() {
    this.chain = [];
  },
};

module.exports = chainMaker;
