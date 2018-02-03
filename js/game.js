/**
 * Created by aarnavjindal on 29/01/18.
 */

var ground_height;
var right_btn_on = false, left_btn_on = false;

var grass;
var scoreText;

var cursors;
var leftBtn,rightBtn;

var stud;
var mountains;
var clouds;
var results;
var schoolStart,schoolEnd,schoolRegion;

var restFrame = 3;

var GameState = {
    init: function() {
        console.log("In init");
        createGame();
    },
    update: function() {
        updateState();
    }
};


function createGame() {
    ground_height = 4*game_height/5;


    game.world.setBounds(0,0,game_length,game_height);
    game.physics.startSystem(Phaser.Physics.ARCADE); //  We're going to be using physics, so enable the Arcade Physics system

    // Adding clouds to sky
    clouds = game.add.group();

    //  Here we'll create clouds evenly spaced apart
    for (var i = 100; i < game_length; i+= 1200) {
        clouds.create(i + 600, 80, 'cloud');
        clouds.create(i, 200, 'cloud');
    }
    game.physics.arcade.enable(clouds);

    // Here we create the ground.
    grass = game.add.tileSprite(0, ground_height + 30 , game_length ,1200, 'ground'); // Width set tile width; Height set tile height
    game.add.tileSprite(0, ground_height, game_length ,50, 'grass'); // Width set tile width; Height set tile height
    game.physics.arcade.enable(grass);
    grass.body.immovable = true;

    // Adding buttons to game
    leftBtn = game.add.button(40, ground_height + 20, 'leftbtn',moveLeft,this);
    leftBtn.fixedToCamera = true;
    leftBtn.scale.setTo(1);
    leftBtn.onInputDown.add(leftBtnClicked,this);
    leftBtn.onInputUp.add(leftBtnNotClicked,this);

    rightBtn = game.add.button(screen_width - 100, ground_height + 20, 'rightbtn',moveRight,this);
    rightBtn.fixedToCamera = true;
    rightBtn.scale.setTo(1);
    rightBtn.onInputDown.add(rightBtnClicked,this);
    rightBtn.onInputUp.add(rightBtnNotClicked,this);

    //Adding mountain
    mountains = game.add.group();
    mountains.create(960,ground_height - 400,'mountain');
    game.physics.arcade.enable(mountains);


    //Add initial tree sprites
    game.add.sprite(120,ground_height - 190,'tree-dark-c').scale.setTo(0.8);
    game.add.sprite(220,ground_height - 338,'tree-bright-e').scale.setTo(0.8);
    game.add.sprite(310,ground_height - 270,'tree-dark-d').scale.setTo(0.9);
    game.add.sprite(840,ground_height - 338,'tree-bright-e').scale.setTo(0.8);
    game.add.sprite(740,ground_height - 190,'tree-dark-c').scale.setTo(0.8);
    game.add.sprite(920,ground_height - 118,'tree-dark-a').scale.setTo(1.25);

    //Adding centre stage elements
    game.add.sprite(380,ground_height - 550,'building-1').scale.setTo(1.5);
    game.add.sprite(530,ground_height - 350,'webdev').scale.setTo(1.6);
    game.add.sprite(410,ground_height - 380,'android').scale.setTo(1.75);
    game.add.sprite(415,ground_height - 500,'welcome-banner').scale.setTo(0.75);
    game.add.sprite(380,ground_height - 140,'name-banner').scale.setTo(1.5);


    //Adding levels
    about = game.add.sprite(1800,0,'about');
    about.animations.add('play',[0,1],1,true);
    about.animations.play('play');

    game.add.sprite(2550,ground_height - 382,'india-gate');
    game.add.sprite(3100,ground_height - 380,'red-fort').scale.setTo(1.25);
    game.add.sprite(2250,ground_height - 198,'milestone');

    schoolStart = 3900;
    schoolEnd = schoolStart + 1280;
    game.add.sprite(schoolStart ,ground_height - 330,'school').scale.setTo(1.5);

    results = game.add.group();
    results.create(4800,ground_height-240,'result');

    game.add.sprite(5650 ,ground_height - 450,'college');


    // The stud and its settings
    stud = game.add.sprite(4200, ground_height - 160, 'dude');
    stud.scale.setTo(0.9);
    game.physics.arcade.enable(stud); //  We need to enable physics on the stud

    //  stud physics properties. Give the little guy a slight bounce.
    stud.body.bounce.y = 0.2;
    stud.body.gravity.y = 300;
    stud.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    stud.animations.add('left',[1,0],6,true);
    stud.animations.add('right',[4,5],6,true);
    stud.animations.add('school-left',[7,6],6,true);
    stud.animations.add('school-right',[10,11],6,true);

    //  The fixed text on screen
    // scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    // scoreText.fixedToCamera = true;

    //  Our controls
    cursors = game.input.keyboard.createCursorKeys();
}

function updateState() {
    console.log(stud.x);
    game.physics.arcade.collide(stud, grass);
    game.camera.follow(stud,Phaser.Camera.FOLLOW_LOCKON);

    //  Reset the studs velocity (movement)
    stud.body.velocity.x = 0;
    mountains.forEach(function(item) {
        item.body.velocity.x = 0;
    }, this);
    clouds.forEach(function (item) {
        item.body.velocity.x = 0;
    }, this);

    inSchool(); // Checks stud in school region

    if (cursors.left.isDown || left_btn_on) {
        moveLeft();
    }
    else if (cursors.right.isDown || right_btn_on) {
        moveRight();
    }
    else {
        stud.animations.stop();
        stud.frame = restFrame;
    }
}

function renderStud() {
    // var entryTween = game.add.tween(stud);
    // entryTween.to({alpha:1},2000);
    // entryTween.start();
    //stud.x += 20;
}

function inSchool(){
    schoolRegion = (stud.x > schoolStart-50 && stud.x < schoolEnd-150);
}

function rightBtnClicked() {
    right_btn_on = true;
}
function leftBtnClicked() {
    left_btn_on = true;
}
function rightBtnNotClicked() {
    right_btn_on = false;
}
function leftBtnNotClicked() {
    left_btn_on = false;
}

function moveRight() {
    stud.body.velocity.x = 350;
    if(schoolRegion) {
        restFrame = 9;
        stud.animations.play('school-right');
    }
    else {
        restFrame = 3;
        stud.animations.play('right');
    }
    if(stud.body.x > 500 && stud.body.x + stud.body.width < game_length) {
        mountains.forEach(function (item) {
            item.body.velocity.x = 40;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = 150;
        }, this);
    }
}

function moveLeft() {
    stud.body.velocity.x = -350;
    if(schoolRegion) {
        restFrame = 8;
        stud.animations.play('school-left');
    }
    else {
        restFrame = 2;
        stud.animations.play('left');
    }
    if(stud.body.x > 500 ) {
        mountains.forEach(function (item) {
            item.body.velocity.x = -40;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = -150;
        }, this);
    }
}
