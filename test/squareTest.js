var expect = require('chai').expect;
var Square = require('../app/square');



describe('Square', function() {
  var square = new Square(25);

  describe('Constructor', function() {
    it('should have a width property equal to 20.', function() {
      expect(square).to.have.property('width').be.a('number').equal(20);
    });
    it('should have a height property equal to 50.', function() {
      expect(square).to.have.property('height').be.a('number').equal(50);
    })
  });
})
