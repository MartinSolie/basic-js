
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.ACode = 'A'.charCodeAt();
    this.ZCode = 'Z'.charCodeAt();
    this.alphabetLength = this.ZCode - this.ACode + 1;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Message and key are mandatory for encrypting');
    }

    let j = 0;
    let src = [...message.toUpperCase()];
    src = src.map(
      (c) => (VigenereCipheringMachine.isLetter(c)
        ? this.encryptLetter(c, key[j++ % key.length])
        : c)
    );

    if (!this.direct) {
      src.reverse();
    }

    return src.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Encrypted message and key are mandatory for encrypting');
    }

    let j = 0;
    let src = [...encryptedMessage.toUpperCase()];
    src = src.map(
      (c) => (VigenereCipheringMachine.isLetter(c)
        ? this.decryptLetter(c, key[j++ % key.length])
        : c)
    );

    if (!this.direct) {
      src.reverse();
    }

    return src.join('');
  }

  encryptLetter(letter, keyLetter) {
    const uLetter = letter.toUpperCase();
    const uKeyLetter = keyLetter.toUpperCase();

    let code = uLetter.charCodeAt() + (uKeyLetter.charCodeAt() - this.ACode);
    if (code > this.ZCode) {
      code -= this.alphabetLength;
    }
    return String.fromCharCode(code);
  }

  decryptLetter(letter, keyLetter) {
    const uLetter = letter.toUpperCase();
    const uKeyLetter = keyLetter.toUpperCase();

    let code = (uLetter.charCodeAt() - (uKeyLetter.charCodeAt() - this.ACode));
    if (code < this.ACode) {
      code += this.alphabetLength;
    }
    return String.fromCharCode(code);
  }

  static isLetter(letter) {
    return letter >= 'A' && letter <= 'Z';
  }
}

module.exports = VigenereCipheringMachine;
