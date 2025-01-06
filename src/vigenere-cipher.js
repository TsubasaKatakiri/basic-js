const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directMode = true){
    this.directMode = directMode;
    this.sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    const preparedMessage = message.toUpperCase();
    const preparedKey = key.padEnd(message.length, key).toUpperCase();
    let resultMessage = '';
    let checkCounter = 0;
    for(let i=0; i<preparedMessage.length; i++){
      if (!preparedMessage[i].match(/[A-Z]/)) {
        resultMessage += preparedMessage[i];
        continue;
      }
      else {
        let keyLetterIndex = this.sample.indexOf(preparedKey[checkCounter]);
        let messageLetterIndex = this.sample.indexOf(preparedMessage[i]);
        let resultIndex = keyLetterIndex + messageLetterIndex;
        if(resultIndex > 25) resultIndex -= 26;
        const char = this.sample.charAt(resultIndex);
        resultMessage += char;
        checkCounter++;
      }
    }
    return this.directMode ? resultMessage : resultMessage.split('').reverse().join('');
  }
  decrypt(message, key) {
    if(!message || !key) throw new Error('Incorrect arguments!');
    const preparedMessage = message.toUpperCase();
    const preparedKey = key.padEnd(message.length, key).toUpperCase();
    let resultMessage = '';
    let checkCounter = 0;
    for(let i=0; i<preparedMessage.length; i++){
      if (!preparedMessage[i].match(/[A-Z]/)) {
        resultMessage += preparedMessage[i];
        continue;
      }
      else {
        let keyLetterIndex = this.sample.indexOf(preparedKey[checkCounter]);
        let messageLetterIndex = this.sample.indexOf(preparedMessage[i]);
        let resultIndex = messageLetterIndex - keyLetterIndex;
        if(resultIndex < 0) resultIndex += 26;
        const char = this.sample.charAt(resultIndex);
        resultMessage += char;
        checkCounter++;
      }
    }
    return this.directMode ? resultMessage : resultMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
