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
  });

  it("finds that there are two players", function() {
    expect(game._players).toEqual([player1, player2]);
  });

});
