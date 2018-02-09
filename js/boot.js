/**
 * Created by aarnavjindal on 30/01/18.
 */
var bgColor = '69c3fc';
var BootState = {
    init: function() {
        game.stage.backgroundColor = bgColor;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
        game.load.image('fallBG', 'assets/sky.png');
        game.load.image('cloud','assets/cloud.png');
        game.load.image('loader','assets/bar.png');
        game.load.spritesheet('plane','assets/plane.png',310,150);
    },
    create: function() {
        this.state.start('PreloadState');
    }
};