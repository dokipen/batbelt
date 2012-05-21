var BB = require('./index')
  , should = require('should')

describe("BatBelt", function() {
  it("should flatten arrays of arrays", function() {
    BB.flatten([[1,2],[3,[4,[5]],6],7,8]).should.eql([1,2,3,4,5,6,7,8]) } )

  it("should listify strings", function() {
    BB.listify("bob").should.eql(["bob"]) } )

  it("should times strings", function() {
    BB.times("bob", 2).should.eql(["bob", "bob"]) } )

  it("should round numbers", function() {
    BB.round(452, 20).should.eql(440) } )

  it("should merge objects", function() {
    BB.merge
      ( { first: "default" , second: "default"}
      , {second: "set" , third: "set"} )
    .should.eql(
        { first: "default" , second: "set", third: "set"} ) } ) } )
