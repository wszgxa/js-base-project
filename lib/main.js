var fs = require('fs');
var wordAnalysis = {
  words: '',
  wordsResults: '',
  getWords () {
    this.words = fs.readFileSync('./lib/words.txt', 'utf-8')
    return this;
  },
  recordWords () {
    
  },
  printWords () {

  }
}
module.exports = wordAnalysis;
