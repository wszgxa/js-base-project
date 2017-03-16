var fs = require('fs');
var wordAnalysis = {
  words: '',
  wordsResults: [],
  result: "",
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
    return this
  },
  printWords () {
    this.wordsResults.forEach((res) => {
      this.result += `${res.word} ${res.num}\n`
    })
    console.log(this.result)
    return this
  }
}
// 调用 wordAnalysis.getWords().recordWords().printWords()
module.exports = wordAnalysis;
