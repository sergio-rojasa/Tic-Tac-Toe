
var Game = (function() {
  function Game() {
    this.players = {
      human: null,
      computer: null
    },
    this.stillPlaying = true,
    this.currentTurn = 0,
    this.currentPlayer = null,
    this.boardGame = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  Game.prototype.init = function() {
    this.choosePiece();
    this.checkFirstTurn();
    this.play();
  },
  Game.prototype.play = function() {
    while(this.stillPlaying) {
      console.log(this);
      this.stillPlaying = false;
    }
  },
  Game.prototype.checkFirstTurn = function() {
    if(this.players.human === 'x') {
      this.currentPlayer = 'human';
    }
    else if (this.players.human === 'o'){
      this.currentPlayer = 'computer';
    }
  },
  Game.prototype.switchTurn = function() {
    if(this.currentTurn % 2 === 0) {
      this.currentPlayer = this.players.player2;
    }
    else {
      this.currentPlayer = this.players.player1;
    }
  },
  Game.prototype.reset = function() {
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        this.boardGame[i][j] = 0;
      }
    }
    console.log(this.boardGame);
  },
  Game.prototype.choosePiece = function() {
   var humanPiece = prompt('Choose x or o').toLowerCase();

    while(this.checkHumanPiece(humanPiece)) {
      humanPiece = prompt('Choose x or o').toLowerCase();
    }

    this.players.human = humanPiece;
    this.setComputerPiece(humanPiece);
  },
  Game.prototype.checkHumanPiece = function(humanPiece) {
    if(humanPiece === 'x' || humanPiece === 'o') {
      return false;
    }
    else {
      return true;
    }
  },
  Game.prototype.setComputerPiece = function(humanPiece) {
    if(humanPiece === 'x') {
      this.players.computer = 'o';
    }
    else if (humanPiece === 'o'){
      this.players.computer = 'x';
    }
  },
  Game.prototype.computerMove = function() {

  },
  Game.prototype.update = function(a, b) {
    this.boardGame[a][b] = this.players.human;
    this.render();
  },
  Game.prototype.render = function() {
    for(var i = 0; i < 3; i ++) {
        console.log('[' + this.boardGame[i] + ']');
    }
  }
  return Game;
})();

var game = new Game();
game.init();

module.exports = Game;
