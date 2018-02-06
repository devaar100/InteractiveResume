/**
 * Created by aarnavjindal on 30/01/18.
 */
var PreloadState = {
    preload: function() {
        loadImages();
        xmid = this.game.world.centerX;
        ymid = this.game.world.centerY;


        this.clouds = this.add.group();
        this.clouds.enableBody = true;

        var cl1 = this.add.sprite(xmid+100,ymid-100,'cloud');
        cl1.alpha = 0.8;
        cl1.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl1);
        cl1.body.velocity.y = -5;


        var cl2 = this.add.sprite(xmid-250,ymid+100,'cloud');
        cl2.alpha = 0.5;
        cl2.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl2);
        cl2.body.velocity.y = -8;


        var cl3 = this.add.sprite(xmid,game_height-100,'cloud');
        cl3.alpha = 0.9;
        cl3.scale.setTo(.75,.75);
        this.game.physics.arcade.enable(cl3);
        cl3.body.velocity.y = -6;


        this.clouds.create(100,100,'cloud');
        this.clouds.create(xmid+100,ymid+300,'cloud');
        this.clouds.create(xmid-100,300,'cloud').scale.setTo(1.24,1.24);
        this.clouds.create(game_length-200,500,'cloud');
        this.clouds.create(150,game_height+200,'cloud');

        this.clouds.enableBody = true;
        this.clouds.setAll('body.velocity.y', -20);


        this.preloadBar = this.add.sprite(this.game.world.centerX,120, 'loader');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(1,2);
        this.load.setPreloadSprite(this.preloadBar);
        var style = { fill: '#fff'};
        var loading_text = this.game.add.text(xmid,123,"LOADING...", style);
        loading_text.anchor.setTo(0.5,0.5);
    },
    loadUpdate: function () {

    },
    create: function() {
        this.state.start('GameState');
    }
};

function loadImages() {
    game.load.image('grass', 'assets/grass.png');
    game.load.image('ground', 'assets/ground.png');
    game.load.image('leftbtn', 'assets/back.png');
    game.load.image('rightbtn', 'assets/front.png');
    game.load.image('tree-bright-e', 'assets/tree-bright-e.png');
    game.load.image('tree-dark-c', 'assets/tree-dark-c.png');
    game.load.image('tree-dark-a', 'assets/tree-dark-a.png');
    game.load.image('tree-dark-d', 'assets/tree-dark-d.png');
    game.load.image('mountain', 'assets/mountain.png');
    game.load.image('android', 'assets/android.png');
    game.load.image('webdev', 'assets/webdev.png');
    game.load.spritesheet('about', 'assets/about.png',325,100);
    game.load.spritesheet('skills', 'assets/skills.png',285,100);
    game.load.image('building-1', 'assets/building-1.png');
    game.load.image('name-banner', 'assets/name-banner.png');
    game.load.image('welcome-banner', 'assets/welcome-banner.png');
    game.load.image('india-gate', 'assets/india-gate.png');
    game.load.image('red-fort', 'assets/red-fort.png');
    game.load.image('milestone', 'assets/milestone.png');
    game.load.image('school', 'assets/school.png');
    game.load.image('college', 'assets/college.png');
    game.load.image('result', 'assets/result.png');
    game.load.image('bird', 'assets/bird.png');
    game.load.image('beginner', 'assets/beginner.png');
    game.load.image('cpp', 'assets/cpp.png');
    game.load.image('expert', 'assets/expert.png');
    game.load.image('familiar', 'assets/familiar.png');
    game.load.image('java', 'assets/java.png');
    game.load.image('js', 'assets/js.png');
    game.load.image('master', 'assets/master.png');
    game.load.image('python', 'assets/python.png');
    game.load.image('language-banner', 'assets/programming-languages.png');
    game.load.image('framework-banner', 'assets/programming-frameworks.png');
    game.load.image('coco-tree', 'assets/coconut-tree.png');
    game.load.image('stone', 'assets/stone.png');
    game.load.image('js-logo', 'assets/js-logo.png');
    game.load.image('html-logo', 'assets/html-logo.png');
    game.load.image('android-logo', 'assets/android-logo.png');
    game.load.image('css-logo', 'assets/css-logo.png');
    game.load.image('flask-logo', 'assets/flask-logo.png');
    game.load.image('coconut', 'assets/coconut.png');
    game.load.image('bill-board', 'assets/bill-board.png');
    game.load.image('floor', 'assets/floor.png');
    game.load.image('panel', 'assets/panel.png');
    game.load.image('crane', 'assets/crane.png');
    game.load.image('warehouse', 'assets/warehouse.png');
    game.load.image('worksite-banner', 'assets/worksite-banner.png');
    game.load.image('cb', 'assets/cb.png');
    game.load.image('attendance-logo', 'assets/attendance-logo.png');
    game.load.image('dtures-logo', 'assets/dtures-logo.png');
    game.load.image('gforms-logo', 'assets/gforms-logo.png');
    game.load.image('riser', 'assets/riser.png');
    game.load.image('sand', 'assets/sand.png');
    game.load.image('sea', 'assets/sea.png');
    game.load.image('seawave', 'assets/seawave.png');
    game.load.image('db-security', 'assets/db-security.png');
    game.load.image('achievements', 'assets/achievements.png');
    game.load.image('hut1', 'assets/hut1.png');
    game.load.image('hut2', 'assets/hut2.png');
    game.load.image('hut3', 'assets/hut3.png');
    game.load.image('statue1', 'assets/statue1.png');
    game.load.image('statue2', 'assets/statue2.png');
    game.load.image('statue3', 'assets/statue3.png');
    game.load.image('wooden-bg', 'assets/wooden-bg.jpg');
    game.load.spritesheet('dude', 'assets/dude.png', 200, 200);
    game.load.spritesheet('doggy', 'assets/baddie.png', 48, 48);
}