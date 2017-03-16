var fs = require('fs');
var wordAnalysis = {
  words: '',
  wordsResults: [],
  getWords () {
    this.words = fs.readFileSync('./lib/words.txt', 'utf-8')
    return this;
  },
  recordWords () {
    let tempMap = {}
    let data = this.words.split(/\s/).filter(data => {
      if (data !== '') return true // 两个空格会有一个空的字符串
    }).forEach(function (res) {
      if (res in tempMap) {
        tempMap[res] += 1
      } else {
        tempMap[res] = 1
      }
    })
    for (var key in tempMap) {
      this.wordsResults.push({
        word: key,
        num: tempMap[key]
      })
    }
    this.wordsResults.sort((i, j) => {
      return j.num - i.num
    })
  },
  printWords () {
    var tempString = ''
    this.wordsResults.forEach((res) => {
      tempString = tempString + `${res.word} ${res.num}\n`
    })
    console.log(tempString)
    return tempString
  }
}
module.exports = wordAnalysis;
