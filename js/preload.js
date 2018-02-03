/**
 * Created by aarnavjindal on 30/01/18.
 */
var PreloadState = {
    init: function() {
    },
    preload: function() {
        game.load.image('grass', 'assets/grass.png');
        game.load.image('ground', 'assets/ground.png');
        game.load.image('cloud', 'assets/cloud.png');
        game.load.image('leftbtn', 'assets/back.png');
        game.load.image('rightbtn', 'assets/front.png');
        game.load.image('tree-bright-e', 'assets/tree-bright-e.png');
        game.load.image('tree-dark-c', 'assets/tree-dark-c.png');
        game.load.image('tree-dark-a', 'assets/tree-dark-a.png');
        game.load.image('tree-dark-d', 'assets/tree-dark-d.png');
        game.load.image('mountain', 'assets/mountain.png');
        game.load.image('android', 'assets/android.png');
        game.load.image('webdev', 'assets/webdev.png');
        game.load.spritesheet('about', 'assets/about2.png',325,100);
        game.load.image('building-1', 'assets/building-1.png');
        game.load.image('name-banner', 'assets/name-banner.png');
        game.load.image('welcome-banner', 'assets/welcome_banner.png');
        game.load.image('india-gate', 'assets/india-gate.png');
        game.load.image('red-fort', 'assets/red-fort.png');
        game.load.image('milestone', 'assets/milestone.png');
        game.load.image('school', 'assets/school.png');
        game.load.image('college', 'assets/college.png');
        game.load.image('result', 'assets/result.png');
        game.load.spritesheet('dude', 'assets/dude.png', 200, 200);
    },
    loadUpdate: function () {

    },
    create: function() {
        this.state.start('GameState');
    }
};