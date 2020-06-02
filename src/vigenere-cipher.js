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

    const src = [...message.toUpperCase()];
    let j = 0;
    for (let i = 0; i < src.length; i += 1) {
      if (src[i] >= 'A' && src[i] <= 'Z') {
        src[i] = this.encryptLetter(src[i], key[j]);
        j = (j + 1) % key.length;
      }
    }

    if (!this.direct) {
      src.reverse();
    }

    return src.join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Encrypted message and key are mandatory for encrypting');
    }

    const src = [...encryptedMessage.toUpperCase()];
    let j = 0;
    for (let i = 0; i < src.length; i += 1) {
      if (src[i] >= 'A' && src[i] <= 'Z') {
        src[i] = this.decryptLetter(src[i], key[j]);
        j = (j + 1) % key.length;
      }
    }

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
}

module.exports = VigenereCipheringMachine;
