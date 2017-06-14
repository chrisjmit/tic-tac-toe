function Game() {
  this._players = [];
  this.board = [];
  this.turns = 0;
  this._currentplayer = 'player1';
}

Game.prototype.addPlayer = function(player) {
  this._players.push(player);
};

Game.prototype.play = function(marker, x, y) {
  this.playersExist();
  this.isTaken(x, y);
  this.board.push([marker, x, y, this._currentplayer]);
  this.endTurn();
};

Game.prototype.isTaken = function(x, y) {
  this.board.forEach(function(item){
    if (item[1] === x && item[2] === y){
      throw new Error("Position taken");
    }
  });
};

Game.prototype.endTurn = function() {
  this.turns += 1;
  this.nextPlayer();
};

Game.prototype.nextPlayer = function() {
  if (this.turns % 2 === 0) {
    return this._currentplayer = 'player1'; //jshint ignore:line
  }
  else {
    return this._currentplayer = 'player2' //jshint ignore:line
  }
};

Game.prototype.playersExist= function() {
  if (this._players.length !== 2) {
    throw new Error("Two players required");
  }
};

Game.prototype.currentPlayer = function() {
  return this._currentplayer;
};
