
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('space', 'assets/misc/starfield.png', 138, 15);
    game.load.image('ball', 'assets/sprites/shinyball.png');
    
}

function create() {

    game.add.tileSprite(0, 0, 800, 600, 'space');

    for (var i = 0; i < 30; i++)
    {
        var sprite = game.add.sprite(game.world.randomX,game.world.randomY,'ball');

        //  Fade in a sprite
        game.add.tween(sprite).to({ y: -50 }, Math.random() * 4500, Phaser.Easing.Cubic.Out, true);

        //  This tween starts with a random length delay
        game.add.tween(sprite).to({ alpha: 0 }, Math.random() * 4500, Phaser.Easing.Quadratic.InOut, true, Math.random() * 500);
    }

}
