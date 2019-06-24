var expect = require("chai").expect;
var app = require("../index");


describe("searchItems", function() {
  it("should return a promise", function() {
    expect(app.searchItems("sailboat", "orlando")).to.be.a('promise');
  });

  it("promise should be an array of objects", function() {
      return app.searchItems("sailboat","orlando").then(function(data){
        expect(data).to.be.an('array');
        expect(data[0]).to.be.an("object");
      })
  });

  it("objects in array should have property title, price, link",function(){
        return app.searchItems("sailboat","orlando").then(function(data){
            expect(data[0]).to.have.property("title");
            expect(data[0]).to.have.property("price");
            expect(data[0]).to.have.property("link");
        })
  })




});