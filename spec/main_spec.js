"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var wordAnalysis = require("../lib/main.js");


describe("test wordsAnalysis class", () => {

    it("should read words.txt give a file", () => {
        // given
        var expect_string = "In the last year, we've been updating pull requests with features that help teams give feedback and make sure only the highest quality code makes it into their projects. You can leave, manage, request, and dismiss reviews, as well as protect branches and limit merging rights. With restricted review dismissals, you can also ensure important feedback gets addressed."

        // when
        var result = wordAnalysis.getWords().words;

        // then
        expect(result).to.equal(expect_string);
    });
    it("should return true words count give", () => {
        // given
        wordAnalysis.words = 'in the last year\nlalal in hehe year in';
        
        // when
        wordAnalysis.recordWords()
        
        // then
        expect(wordAnalysis.wordsResults).to.have.deep.property('[0].word', 'in');
        expect(wordAnalysis.wordsResults).to.have.deep.property('[0].num', 3);        
        expect(wordAnalysis.wordsResults).to.have.deep.property('[1].word', 'year');        
        expect(wordAnalysis.wordsResults).to.have.deep.property('[1].num', 2);        
    })
    it("should print the right text words give", () => {
        // given
        wordAnalysis.words = "in the last year\nlalal in hehe year in";
        wordAnalysis.wordsResults = []
        
        // when
        let result = 'in 3\nyear 2\nthe 1\nlast 1\nlalal 1\nhehe 1\n'
        wordAnalysis.recordWords()
        // then
        expect(wordAnalysis.printWords()).to.equal(result)
    })
});