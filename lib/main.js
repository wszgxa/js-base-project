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

    // 获取排序前的tempMap
    this.words.split(/\s/)
    .filter(data => {
      if (data !== '') return true // 两个空格会有一个空的字符串
    })
    .forEach(function (res) {
      if (res in tempMap) {
        tempMap[res] += 1
      } else {
        tempMap[res] = 1
      }
    })
    // 排序
    this.wordsResults = Object.keys(tempMap)
    .map((key) => {
      return {
        word: key,
        num: tempMap[key]
      }
    })
    .sort((i, j) => {
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
