/**
 * Created by aarnavjindal on 29/01/18.
 */

var ground_height;
var right_btn_on = false, left_btn_on = false;

var grass,floor;
var scoreText;

var cursors;
var leftBtn,rightBtn;

var stud;
var mountains;
var clouds;
var birds,birdsShown=false;
var stones,targets,hitCount=0,coconuts;

var results,resultShown=false;
var schoolStart,schoolEnd,schoolRegion;

var picker_crane;

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
    grass = game.add.tileSprite(0, ground_height + 30 , starting_ground ,1200, 'ground'); // Width set tile width; Height set tile height
    game.add.tileSprite(0, ground_height, starting_ground ,50, 'grass'); // Width set tile width; Height set tile height
    game.physics.arcade.enable(grass);
    grass.body.immovable = true;

    //Adding mountain
    mountains = game.add.group();
    mountains.create(980,ground_height - 400,'mountain');
    mountains.create(6000,ground_height - 400,'mountain');
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
    game.add.sprite(430,ground_height - 500,'welcome-banner').scale.setTo(0.75);
    game.add.sprite(380,ground_height - 140,'name-banner').scale.setTo(1.5);


    //Adding level 1
    about = game.add.sprite(1800,0,'about');
    about.animations.add('play',[0,1],1,true);
    about.animations.play('play');

    game.add.sprite(2550,ground_height - 382,'india-gate');
    game.add.sprite(3100,ground_height - 380,'red-fort').scale.setTo(1.25);
    game.add.sprite(2250,ground_height - 198,'milestone');

    schoolStart = 3900;
    schoolEnd = schoolStart + 2100;
    game.add.sprite(schoolStart ,ground_height - 330,'school').scale.setTo(1.5);

    style_black = { font:"20px Roboto",fill:"#000",align:"center"};
    results = game.add.group();
    results.create(4750,0,'result');
    results.create(4970,0,'result').scale.setTo(1.2);
    game.add.text(4800,ground_height-230,'Class 10\n10 CGPA',style_black);
    game.add.text(5030,ground_height-270,'Class 12\nCBSE 96%',style_black);

    game.add.sprite(5300 ,ground_height - 450,'college');

    //Adding level 2
    skills = game.add.sprite(6100,0,'skills');
    skills.animations.add('play',[0,1],1,true);
    skills.animations.play('play');

    //Languages
    game.add.sprite(6850,ground_height - 550,'language-banner');
    game.add.sprite(6708-30,ground_height - 400,'cpp');
    game.add.sprite(6682-30,ground_height - 300,'java');
    game.add.sprite(6653-30,ground_height - 200,'python');
    game.add.sprite(6600-30,ground_height - 100,'js');
    game.add.sprite(6800,ground_height - 450,'beginner').scale.setTo(1.25);
    game.add.sprite(7000,ground_height - 450,'familiar').scale.setTo(1.25);
    game.add.sprite(7200,ground_height - 450,'expert').scale.setTo(1.25);
    game.add.sprite(7400,ground_height - 450,'master').scale.setTo(1.25);

    birds = game.add.group();
    arr = [
        { birds:3 , y:400 },
        { birds:2 , y:300 },
        { birds:2 , y:200 },
        { birds:2 , y:100 }];
    arr.forEach(function (item) {
        x = 7605;
        for(i=0;i<item.birds;i++,x+=200) {
            bird = birds.create(x, ground_height - item.y, 'bird');
            bird.scale.setTo(0.5);
            bird['group'] = 5- (item.y / 100);
            bird['i'] = i;
        }
    });

    // Frameworks
    game.add.sprite(7950,ground_height - 550,'framework-banner');
    game.add.sprite(7600,ground_height - 460,'coco-tree').scale.setTo(1.2);
    game.add.sprite(7800,ground_height - 460,'coco-tree').scale.setTo(1.2);
    game.add.sprite(8000,ground_height - 460,'coco-tree').scale.setTo(1.2);
    game.add.sprite(8200,ground_height - 460,'coco-tree').scale.setTo(1.2);
    game.add.sprite(8400,ground_height - 460,'coco-tree').scale.setTo(1.2);
    //Target
    targets = [
        {x:7820,y:ground_height-280,type:'html-logo'},
        {x:8020,y:ground_height-280,type:'css-logo'},
        {x:8220,y:ground_height-280,type:'js-logo'},
        {x:8420,y:ground_height-280,type:'flask-logo'},
        {x:8620,y:ground_height-280,type:'android-logo'}
    ];
    coconuts = game.add.group();
    targets.forEach((item)=>{
        coconut = coconuts.create(item.x,item.y,'coconut');
        coconut['type'] = item.type;
    });
    game.physics.arcade.enable(coconuts);

    // Bullets
    stones = game.add.weapon(1,'stone');
    stones.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    stones.bulletSpeed = 400;

    game.physics.arcade.enable(stones);

    //Adding level3
    experience = game.add.sprite(9000,0,'experience');
    experience.animations.add('play',[0,1],1,true);
    experience.animations.play('play');

    picker_crane = game.add.group();
    for(i=ground_height-90;i+90>0;i-=90){
        picker_crane.create(9800,i,'crane');
        picker_crane.create(11000,i,'crane');
    }
    picker_crane.create(10200,ground_height-565,'warehouse');
    game.physics.arcade.enable(picker_crane);

    floor = game.add.tileSprite(starting_ground, ground_height, work_ground ,50, 'floor');
    game.add.tileSprite(starting_ground, ground_height + 50, starting_ground ,400, 'panel');
    game.physics.arcade.enable(floor);
    floor.body.immovable = true;

    game.add.sprite(9700,ground_height-492,'picker').scale.setTo(2);



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


    // The stud and its settings
    stud = game.add.sprite(300, ground_height - 260, 'dude');
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
    stones.trackSprite(stud, 25, 100);

    //  The fixed text on screen
    // scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    // scoreText.fixedToCamera = true;

    //  Our controls
    cursors = game.input.keyboard.createCursorKeys();
}

function updateState() {
    game.physics.arcade.collide(stud, grass);
    game.physics.arcade.collide(results, grass);
    game.physics.arcade.overlap(stones.bullets,coconuts,onStoneCoconutCollision,null,this);
    game.physics.arcade.collide(stud, floor);
    game.camera.follow(stud,Phaser.Camera.FOLLOW_LOCKON);

    //  Reset the studs velocity (movement)
    stud.body.velocity.x = 0;
    mountains.forEach(function(item) {
        item.body.velocity.x = 0;
    }, this);
    clouds.forEach(function (item) {
        item.body.velocity.x = 0;
    }, this);
    picker_crane.forEach(function (item) {
        item.body.velocity.x = 0;
    }, this);

    inSchool(); // Checks stud in school region
    if(!resultShown && stud.x > 4100)
        fallResult();

    if(!birdsShown && stud.x > 6300)
        flyBirds();

    if(stud.x > 7800 && stud.x < 8600)
        throwStones();

    if(stud.x > 8800)
        stud.body.y = ground_height - 180;

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

function fallResult() {
    game.physics.arcade.enable(results);
    results.forEach(function (item) {
        item.body.y = 0;
        item.body.bounce.y = 0.4;
        item.body.gravity.y = 300;
    }, this);
    resultShown = true;
}

function flyBirds() {
    game.physics.arcade.enable(birds);
    birds.forEach(function (item) {
        setTimeout(()=>{
                game.add.tween(item).to({x:item.body.x-800},400,Phaser.Easing.Default, true).start();
            },item['group']*400+item['i']*100);
    }, this);
    birdsShown = true;
}

function throwStones(){
    if(hitCount>=5)
        return;
    if(targets[hitCount].x+100<game.camera.x+screen_width)
        stones.fireAtXY(targets[hitCount].x,targets[hitCount].y);
}

function inSchool(){
    schoolRegion = (stud.x > schoolStart-50 && stud.x < schoolEnd-150);
}

function onStoneCoconutCollision(stone,coconut) {
    fruit = coconut;
    stone.kill();
    coconut.kill();
    hitCount++;
    logo = game.add.sprite(fruit.x,fruit.y,fruit.type);
    logo.scale.setTo(0.5,0.5);
    logo.anchor.setTo(0.5,0.5);
    game.add.tween(logo).to({y:ground_height-320},300).start();
    game.add.tween(logo.scale).to({y:0.9,x:0.9},500).start();

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
    if(stud.x > 500 && stud.x + stud.body.width < game_length) {
        mountains.forEach(function (item) {
            item.body.velocity.x = 50;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = 150;
        }, this);
        if(stud.x > 9000)
            picker_crane.forEach(function (item) {
                item.body.velocity.x = 50;
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
    if(stud.x > 500 ) {
        mountains.forEach(function (item) {
            item.body.velocity.x = -50;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = -150;
        }, this);
        if(stud.x > 9000)
            picker_crane.forEach(function (item) {
                item.body.velocity.x = -50;
            }, this);
    }
}
