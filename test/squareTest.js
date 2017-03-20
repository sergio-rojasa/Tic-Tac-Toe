var expect = require('chai').expect;
var Square = require('../app/square');



describe('Square', function() {
  var square = new Square(25);

  describe('Constructor', function() {
    it('should have a width property equal to 20.', function() {
      expect(square).to.have.property('width').be.a('number').equal(20);
    });
    it('should have a height property equal to 50.', function() {
      expect(square).to.have.property('height').be.a('number').equal(20);
    });
    it('should have a xPosition property equal to 0.', function() {
      expect(square).to.have.property('xPosition').be.a('number').equal(0);
    });
    it('should have a yPosition property equal to 0.', function() {
      expect(square).to.have.property('yPosition').be.a('number').equal(0);
    });
    it('should have a fillColor property', function() {
      expect(square).to.have.property('fillColor').be.a('string').equal('#000');
    });
    it('should have a render method', function() {
      expect(square).to.have.property('render').be.a('function');
    })
  });
})
