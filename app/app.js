
var Game = (function() {
  function Game() {
    this.players = {
      player1: 'x',
      player2: 'o'
    },
    this.stillPlaying = true,
    this.currentTurn = 1,
    this.currentPlayer = this.players.player1,
    this.boardGame = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  }

  Game.prototype.init = function() {
    this.render();
    this.play();
  },
  Game.prototype.play = function() {
    while(this.stillPlaying) {
      this.switchTurn();
      this.currentTurn++;

      if(this.currentTurn == 6) {
        console.log(this);
        this.stillPlaying = false;
        this.reset();
        console.log('bye');
      }
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
  Game.prototype.choose = function() {

  },
  Game.prototype.update = function(a, b) {
    this.boardGame[a][b] = this.players.player1;
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
