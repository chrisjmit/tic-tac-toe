describe("Tic-tac-toe", function(){

    // game.play('x', 0, 0);
    // game.play('o', 1, 0);
    // game.play('x', 1, 1);
    // game.play('o', 2, 1);
    // game.play('x', 2, 2);
    // console.log('Player 1 wins!');

  var game;
  var player1;
  var player2;

  beforeEach(function() {
    game = new Game();
    player1 = new Player();
    player2 = new Player();
    game.addPlayer(player1);
    game.addPlayer(player2);
  });

  it("finds that there are two players", function() {
    expect(game._players).toEqual([player1, player2]);
  });

  it("players can take turns until the game is over", function() {
    game.play("x", 0, 0);
    game.play("o", 1, 1);
    game.play("x", 2, 0);
    game.play("o", 1, 0);
    game.play("x", 1, 2);
    game.play("o", 2, 1);
    game.play("x", 0, 1);
    game.play("o", 0, 2);
    game.play("x", 2, 2);
    expect(game.board.length).toEqual(9);
  });

  it("player can claim a field if it is not already taken", function() {
    game.play("x", 0, 0);
    expect(function(){ game.play("o", 0, 0);}).toThrowError("Position taken");
  });

  it("a turn ends when a player claims a field", function() {
    game.play("x", 0, 0);
    expect(game.currentPlayer()).toBe('player2');
  });

  it("a player wins if they claim all the fields in a row, column or diagonal", function() {
    game.play("x", 1, 1);
    game.play("o", 0, 0);
    game.play("x", 2, 0);
    game.play("o", 0, 1);
    game.play("x", 0, 2);
    expect(game.over()).toEqual("Player 1 wins!");
  });

});
