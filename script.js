/**
 * Created by aarnavjindal on 30/01/18.
 */
var game_height = window.innerHeight, game_length = 21000,
    screen_width = window.innerWidth, starting_ground = 9000,
    work_ground = 5500,beach_ground = 3800,sea_length = 2000;
var game = new Phaser.Game(screen_width, game_height, Phaser.AUTO, 'game_body');
game.state.add('BootState',BootState);
game.state.add('PreloadState',PreloadState);
game.state.add('GameState',GameState);
game.state.start('BootState');