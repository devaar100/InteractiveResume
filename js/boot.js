/**
 * Created by aarnavjindal on 30/01/18.
 */
var bgColor = '69c3fc';
var BootState = {
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function() {
        this.load.image('fallBG', 'assets/sky.png');
        this.load.image('cloud','assets/cloud.png');
        //this.load.spritesheet('skyDiving', 'assets/aarnav_skydiving.png', 330, 506,2);
    },
    create: function() {
        this.game.stage.backgroundColor = bgColor;
        this.state.start('PreloadState');
    }
};