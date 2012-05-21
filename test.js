var BB = require('./index')
  , should = require('should')

describe("BatBelt", function() {
  it("should flatten arrays of arrays", function() {
    BB.flatten([[1,2],[3,[4,[5]],6],7,8]).should.eql([1,2,3,4,5,6,7,8]) } ) } )
