/**
 * Created by aarnavjindal on 30/01/18.
 */
var loaded = 0;
WebFont.load({
    custom : {
        families: ['frank_plain','frank_medium']
    },
    timeout:1000,
    fontactive: function(familyName,fvd){
        console.log(familyName);
        loaded++;
    },
});
var game_height = window.innerHeight, game_length = 22400,
    screen_width = window.innerWidth, starting_ground = 9000,
    work_ground = 5500,beach_ground = 3800,sea_length = 3000;

var game = new Phaser.Game(screen_width, game_height, Phaser.AUTO,'canvas');
game.width  = screen_width;
game.height = game_height;
console.log(game.width+","+game.height);
console.log(screen_width+","+game_height);
game.state.add('BootState',BootState);
game.state.add('PreloadState',PreloadState);
game.state.add('GameState',GameState);
game.state.start('BootState');