describe("Game", function(){
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
