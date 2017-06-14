(function(){
  'use strict';
}());

describe("Game", function(){
  var game;
  var player1;
  var player2;

  beforeEach(function() {
    game = new Game();
    player1 = new Player();
    player2 = new Player();
  });


  it("stops the game unless there are two players", function(){
    game.addPlayer(player1);
    expect(function() { game.play();} ).toThrowError("Two players required");
  });

  it("finds that there are two players", function() {
    game.addPlayer(player1);
    game.addPlayer(player2);
    expect(game._players).toEqual([player1, player2]);
  });

  it("has a current player", function() {
    game.addPlayer(player1);
    game.addPlayer(player2);
    game.play("x", 0, 0);
    expect(game._currentplayer).toBe('player2');
  });

  it("game can be won via a row", function() {
    game.play("x", 0, 0);
    game.play("o", 0, 1);
    game.play("x", 1, 0);
    game.play("o", 0, 2);
    game.play("x", 2, 0);
    expect(game.over()).toEqual("Player 1 wins!");
  });

});
