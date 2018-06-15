describe("Player", function () {

  it("is not playing any song when created", function () {
    var player = new Player();

    expect(player.isPlaying).toBeFalsy();
  });

});