var expect = require("chai").expect;
var app = require("../index");


describe("searchItems", function() {
  it("should return a promise", function() {
    expect(app.searchItems("sailboat", "orlando")).to.be.a('promise');
  });
});