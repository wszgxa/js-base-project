"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var wordAnalysis = require("../lib/main.js");


describe("test wordsAnalysis class", function(){

    it("should read words.txt give a file", function(){
        // given
        var expect_string = "In the last year, we've been updating pull requests with features that help teams give feedback and make sure only the highest quality code makes it into their projects. You can leave, manage, request, and dismiss reviews, as well as protect branches and limit merging rights. With restricted review dismissals, you can also ensure important feedback gets addressed."

        // when
        var result = wordAnalysis.getWords().words;
        
        // then
        expect(result).to.equal(expect_string);
    });
});