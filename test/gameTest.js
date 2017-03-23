var expect = require('chai').expect;
var Game = require('../app/app');

describe('Game', function() {
  var game = new Game();

  describe('Constructor', function() {
    it('should have players property', function() {
      expect(game).to.have.property('players');
    });
    it('should have stillPlaying property', function() {
      expect(game).to.have.property('stillPlaying').be.a('boolean').equal(true);
    });
    it('should have currentturn property', function() {
      expect(game).to.have.property('currentTurn').be.a('number').equal(0);
    });
    it('should have currentPlayer property', function() {
      expect(game).to.have.property('currentPlayer');
    });
    it('should have boardGame property', function() {
      expect(game).to.have.property('boardGame');
    });
    it('should have init method', function() {
      expect(game).to.have.property('init').be.a('function');
    });
    it('should have play method', function() {
      expect(game).to.have.property('play').be.a('function');
    });
    it('should have switchTurn method', function() {
      expect(game).to.have.property('switchTurn').be.a('function');
    });
    it('should have reset method', function() {
      expect(game).to.have.property('reset').be.a('function');
    });
    it('should have choosePiece', function() {
      expect(game).to.have.property('choosePiece').be.a('function');
    });
    it('should have checkChoosedPiece', function() {
      expect(game).to.have.property('checkChoosedPiece').be.a('function');
    });
    it('should have update method', function() {
      expect(game).to.have.property('update').be.a('function');
    });
    it('should have render method', function() {
      expect(game).to.have.property('render').be.a('function');
    });
  });

});
