/**
 * Created by aarnavjindal on 29/01/18.
 */

facebook_url = 'https://www.facebook.com/aarnav.jindal.7';
github_url = 'https://github.com/devaar100';
hackerrank_url = 'https://www.hackerrank.com/aarnavjindal100';
linkedin_url = 'https://www.linkedin.com/in/aarnav-jindal-0b823414a/';

var ground_height;
var right_btn_on = false, left_btn_on = false;

var grass,floor,sand,victoryLand;

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
var risers,app_logos,risen=false;

var restFrame = 3;

var beachStart,beachEnd,beachRegion=false;
var doggy,doggyVelolcity=0,dogRestFrame=1;

var seaStart,seaEnd;

var boat,boat2,jetski;
var heroToFollow;
var interests,interest_shown=false;

var lastStart,lastEnd;

var text_shown = false;
var celebrate = false;
var thanks;

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
    ground_height = 7*game_height/10+80;


    game.world.setBounds(0,0,game_length,game_height);
    game.physics.startSystem(Phaser.Physics.ARCADE); //  We're going to be using physics, so enable the Arcade Physics system

    // Adding clouds to sky
    clouds = game.add.group();

    //  Here we'll create clouds evenly spaced apart
    for (var i = 100; i < game_length; i+= 1200) {
        clouds.create(i + 600, ground_height-500, 'cloud');
        clouds.create(i, ground_height-500+120, 'cloud');
    }
    game.physics.arcade.enable(clouds);

    // Here we create the ground.
    grass = game.add.tileSprite(0, ground_height + 30 , starting_ground ,1200, 'ground'); // Width set tile width; Height set tile height
    game.add.tileSprite(0, ground_height, starting_ground ,50, 'grass'); // Width set tile width; Height set tile height
    game.physics.arcade.enable(grass);
    grass.body.immovable = true;
    game.add.text(250,ground_height+60,'Use ARROW KEYS or SCREEN BUTTONS to navigate',{fill:"#fff",font:"35px Arial"})

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


    results = game.add.group();
    results.create(4750,0,'result');
    results.create(4970,0,'result').scale.setTo(1.2);

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

    //Adding risers
    risers = game.add.group();
    risers.create(12150,ground_height,'riser');
    risers.create(12630,ground_height,'riser');
    risers.create(13150,ground_height,'riser');
    risers.create(13740,ground_height,'riser');
    game.physics.arcade.enable(risers);

    //Adding level3
    game.add.sprite(9000,-25,'bill-board').scale.setTo(0.7);

    picker_crane = game.add.group();
    for(i=ground_height-90;i+90>0;i-=90){
        picker_crane.create(9800,i,'crane');
        picker_crane.create(11000,i,'crane');
    }
    picker_crane.create(10200,ground_height-565,'warehouse');
    game.physics.arcade.enable(picker_crane);

    floor = game.add.tileSprite(starting_ground, ground_height, work_ground ,50, 'floor');
    game.add.tileSprite(starting_ground, ground_height + 50, work_ground ,400, 'panel');
    game.physics.arcade.enable(floor);
    floor.body.immovable = true;

    game.add.sprite(9700,ground_height-280,'worksite-banner');
    game.add.sprite(10300,ground_height-280,'worksite-banner');
    game.add.sprite(10700,ground_height-110,'cb');
    game.add.sprite(10900,ground_height-280,'worksite-banner');
    game.add.sprite(11300,ground_height-110,'cb');

    //Adding level4
    game.add.sprite(11700,-25,'bill-board').scale.setTo(0.7);


    app_logos = game.add.group();
    app_logos.create(12620,ground_height-145,'dtures-logo');
    app_logos.create(12158,ground_height-145,'gforms-logo');
    app_logos.create(13125,ground_height-145,'db-security');
    game.physics.arcade.enable(app_logos);
    app_logos.create(13725,ground_height-145,'attendance-logo');
    game.physics.arcade.enable(app_logos);

    //Adding level5
    beachStart = starting_ground+work_ground;
    beachEnd = beachStart + beach_ground;

    game.add.sprite(beachStart+10,0,'achievements');
    sand = game.add.tileSprite(beachStart, ground_height, beach_ground ,(game_height-ground_height)*3/5, 'sand');
    game.add.tileSprite(beachStart, ground_height + (game_height-ground_height)*3/5-6, beach_ground ,6, 'seawave');
    game.add.tileSprite(beachStart, ground_height + (game_height-ground_height)*3/5, beach_ground ,400, 'sea');
    game.physics.arcade.enable(sand);
    sand.body.immovable = true;

    beachDecor = game.add.group();
    for(i=0;i<3;i++)
        beachDecor.create(beachStart+600+i*1000,ground_height-600,'coco-tree');
    game.physics.arcade.enable(beachDecor);
    beachDecor.forEach((item)=>{
        item.scale.setTo(1.5);
    });

    game.add.sprite(beachStart+520,ground_height-490,'hut1').scale.setTo(1.25);
    game.add.sprite(beachStart+820,ground_height-270,'wooden-bg').scale.setTo(1.25);
    game.add.sprite(beachStart+1200,ground_height-200,'statue1').scale.setTo(1.5);

    game.add.sprite(beachStart+1480,ground_height-490,'hut2').scale.setTo(1.25);
    game.add.sprite(beachStart+1790,ground_height-270,'wooden-bg').scale.setTo(1.25);
    game.add.sprite(beachStart+2170,ground_height-200,'statue2').scale.setTo(1.5);

    game.add.sprite(beachStart+2520,ground_height-490,'hut3').scale.setTo(1.25);
    game.add.sprite(beachStart+2820,ground_height-270,'wooden-bg').scale.setTo(1.25);
    game.add.sprite(beachStart+3200,ground_height-200,'statue3').scale.setTo(1.5);


    //Adding level6
    seaStart = beachEnd;
    seaEnd = seaStart + sea_length;
    boat = game.add.sprite(seaStart+20,ground_height-90,'jetski');
    jetski = game.add.sprite(seaStart+20,ground_height-180,'sea-boat');
    jetski.alpha = 0;
    jetski.animations.add('left',[1,0],6,true);
    jetski.animations.add('right',[2,3],6,true);
    game.physics.arcade.enable(jetski);
    game.add.tileSprite(seaStart, ground_height+16, sea_length ,6, 'seawave');
    game.add.tileSprite(seaStart, ground_height+22, sea_length ,600, 'sea');
    game.add.sprite(beachEnd+10,0,'achievements').scale.setTo(1.15,1);

    interests = game.add.group();
    i1 = interests.create(seaStart+800,100,'business');
    i1.scale.setTo(0.8);
    i1.alpha = 0;

    i2 = interests.create(seaStart+1400,100,'economics');
    i2.scale.setTo(0.8);
    i2.alpha = 0;

    i3 = interests.create(seaStart+2100,100,'sports');
    i3.scale.setTo(0.8);
    i3.alpha = 0;

    //Adding level7
    lastStart = seaEnd;
    lastLength = game_length - lastStart;
    lastEnd = game_length;
    victoryLand = game.add.tileSprite(lastStart, ground_height, lastLength ,(game_height-ground_height)*3/5, 'sand');
    game.add.tileSprite(lastStart, ground_height + (game_height-ground_height)*3/5-6, lastLength ,6, 'seawave');
    game.add.tileSprite(lastStart, ground_height + (game_height-ground_height)*3/5, lastLength ,400, 'sea');
    game.physics.arcade.enable(victoryLand);
    victoryLand.body.immovable = true;
    boat2 = game.add.sprite(lastStart-boat.width - 20,ground_height-90,'jetski2');
    boat2.alpha = 0;
    game.add.sprite(lastStart+100,ground_height-430,'hut').scale.setTo(1.25);
    shift = ground_height - 580;
    game.add.button(lastStart+875,shift + 130,'fb',openfb,this);
    game.add.button(lastStart+868,shift + 230,'github',opengithub,this);
    game.add.button(lastStart+878,shift + 320,'gmail',opengmail,this);
    game.add.button(lastStart+878,shift + 390,'hackerrank',openhackerrank,this);
    game.add.button(lastStart+875,shift + 480,'linkedin',openlinkedin,this);


    // Adding buttons to game
    leftBtn = game.add.button(40, game_height - 90, 'leftbtn',moveLeft,this);
    leftBtn.fixedToCamera = true;
    leftBtn.scale.setTo(1);
    leftBtn.onInputDown.add(leftBtnClicked,this);
    leftBtn.onInputUp.add(leftBtnNotClicked,this);

    rightBtn = game.add.button(screen_width - 100, game_height - 90, 'rightbtn',moveRight,this);
    rightBtn.fixedToCamera = true;
    rightBtn.scale.setTo(1);
    rightBtn.onInputDown.add(rightBtnClicked,this);
    rightBtn.onInputUp.add(rightBtnNotClicked,this);

    // The stud and its settings
    stud = game.add.sprite(200,ground_height - 250, 'dude');
    stud.scale.setTo(0.9);
    game.physics.arcade.enable(stud); //  We need to enable physics on the stud

    //  stud physics properties. Give the little guy a slight bounce.
    stud.body.bounce.y = 0.2;
    stud.body.gravity.y = 500;
    stud.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    stud.animations.add('left',[1,0],6,true);
    stud.animations.add('right',[4,5],6,true);
    stud.animations.add('school-left',[7,6],6,true);
    stud.animations.add('school-right',[10,11],6,true);
    stud.animations.add('beach-left',[13,12],6,true);
    stud.animations.add('beach-right',[16,17],6,true);
    stud.animations.add('celeb-right',[15,19],1,true);
    stones.trackSprite(stud, 25, 100);

    doggy = game.add.sprite(beachStart+400,ground_height-48,'doggy');
    game.physics.arcade.enable(doggy);

    doggy.body.collideWorldBounds = true;
    doggy.animations.add('left',[1,0],6,true);
    doggy.animations.add('right',[2,3],6,true);


    //  Our controls
    cursors = game.input.keyboard.createCursorKeys();
    heroToFollow = stud;
}

function updateState() {
    game.physics.arcade.collide(stud, grass);
    game.physics.arcade.collide(results, grass);
    game.physics.arcade.collide(risers, app_logos);
    game.physics.arcade.collide(stud, sand);
    game.physics.arcade.collide(stud, victoryLand);
    game.physics.arcade.overlap(stones.bullets,coconuts,onStoneCoconutCollision,null,this);
    game.physics.arcade.collide(stud, floor);
    game.camera.follow(heroToFollow,Phaser.Camera.FOLLOW_LOCKON);

    //  Reset the studs velocity (movement)
    stud.body.velocity.x = 0;
    doggy.body.velocity.x = 0;
    jetski.body.velocity.x = 0;
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
    onBeach();
    isWithDog();

    if(!resultShown && stud.x > 4100)
        fallResult();
    else if(!text_shown && stud.x > 4100)
        createTexts();
    else if(!birdsShown && stud.x > 6300)
        flyBirds();
    else if(stud.x > 7800 && stud.x < 8600)
        throwStones();
    else if(stud.x > 8800 && stud.x < 8950)
        stud.body.y = ground_height - 180;
    else if(!risen && stud.x > 11800)
        raiseRisers();
    else if(!interest_shown && jetski.x+jetski.width > seaStart+500)
        showInterests();

    if (cursors.left.isDown || left_btn_on || backButtonPressed()) {
        moveLeft();
    }
    else if (cursors.right.isDown || right_btn_on || forwardButtonPressed()) {
        moveRight();
    }
    else {
        if(celebrate)
            stud.animations.play('celeb-right');
        else {
            stud.animations.stop();
            stud.frame = restFrame;
        }
        doggy.animations.stop();
        doggy.frame = dogRestFrame;
    }
}

function createTexts(){
    text_shown = true;
    result_font = { font:"20px Roboto",fill:"#000",align:"center"};
    game.add.text(4800,ground_height-230,'Class 10\n10 CGPA',result_font);
    game.add.text(5030,ground_height-270,'Class 12\nCBSE 96%',result_font);
    game.add.text(9035,60,'EXPERIENCE',{ font:"45px frank_plain",fill:"#ffffff",align:"center"});
    exp_plain = { font:"40px frank_plain",fill:"#ffffff",align:"center"};
    exp_med = { font:"30px frank_medium",fill:"#ffffff",align:"center"};
    exp_txt = { font:"15px arial", fill: "#ffffff"};

    game.add.text(9740,ground_height-240,'May 2017 - Oct 2017',exp_med);
    game.add.text(9740,ground_height-210,'NSS-SA',exp_plain);
    game.add.text(9740,ground_height-160,'Science and Mathematics teacher for secondary classes for\nunder privileged children at NSS Shiksha Abhiyaan',exp_txt);

    game.add.text(9740+600,ground_height-240,'Sep 2017 - Nov 2017',exp_med);
    game.add.text(9740+600,ground_height-210,'TEACHER ASSISTANT',exp_plain);
    game.add.text(9740+600,ground_height-160,'Teacher assistant for advanced data structures and algorithms\nAlgo++ course at Coding Blocks',exp_txt);

    game.add.text(9740+1200,ground_height-240,'Dec 2017 - Jan 2018',exp_med);
    game.add.text(9740+1200,ground_height-210,'ANDROID INTERN',exp_plain);
    game.add.text(9740+1200,ground_height-160,'Internship in android department at Coding Blocks under able\nguidance of Mr Prateek Narang and Mr Arnav Gupta',exp_txt);

    game.add.text(11745,60,'PROJECTS',{ font:"45px frank_plain",fill:"#ffffff",align:"center"});
    exp_txt2 = { font:"15px arial", fill: "#ffffff"};
    exp_txt2.font = "20px arial";
    exp_txt2.fill = "#777777";
    exp_plain2 = { font:"40px frank_plain",fill:"#ffffff",align:"center"};
    exp_plain2.fill = "#444";
    game.add.text(12775,ground_height-330,'DTU RESOURCES',exp_plain2);
    game.add.text(12775,ground_height-280,'An application for all the study material\nand essential information to make\ncollege life hassle free for DTUiites',exp_txt2);
    game.add.text(12290,ground_height-330,'G-FORMS',exp_plain2);
    game.add.text(12290,ground_height-280,'An android application for google\nforms to create, edit google forms\nand manage responses on the go',exp_txt2);
    game.add.text(13300,ground_height-330,'DATABASE SECURITY',exp_plain2);
    game.add.text(13300,ground_height-280,'An in depth analysis in database security\nissues and using machine learing to improve\nexisting intrusion detection systems under\nMs Indu Singh\nAssistant Professor DTU',exp_txt2);
    game.add.text(13900,ground_height-330,'ATTENDANCE MANAGER',exp_plain2);
    game.add.text(13900,ground_height-280,'An android application with an environment\nfriendly motive to save trees by replacing\nattendance registers in school\nFounder and Co-owner',exp_txt2);
    exp_plain3 = { font:"40px frank_plain",fill:"#ffffff",align:"center"};
    exp_plain3.fill = "#ffffff";
    game.add.text(beachStart+50,35,'ACHIEVEMENTS',exp_plain3);
    exp_txt3 = { font:"20px arial", fill: "#ffffff"};
    exp_txt3.fill = '#ffffff';
    game.add.text(beachStart+860,ground_height-250,'ZafinTech Hackathon',exp_med);
    game.add.text(beachStart+860,ground_height-215,'3RD PRIZE',exp_plain3);
    game.add.text(beachStart+860,ground_height-160,'National level hackathon to design\nuser friendly mobile banking app to\nincrease user engagement',exp_txt3);
    game.add.text(beachStart+1830,ground_height-250,'DCB Hackathon',exp_med);
    game.add.text(beachStart+1830,ground_height-215,'4TH PRIZE',exp_plain3);
    game.add.text(beachStart+1830,ground_height-160,'National level hackathon to design\nsafe, quicker and more efficient\npayment solution',exp_txt3);
    game.add.text(beachStart+2860,ground_height-250,'Vistara Hackathon',exp_med);
    game.add.text(beachStart+2860,ground_height-215,'3RD PRIZE',exp_plain3);
    game.add.text(beachStart+2860,ground_height-160,'National level hackathon to improve\nflight and airport efficiency,\nexperience and management ',exp_txt3);
    game.add.text(beachEnd+50,35,'OTHER INTERESTS',exp_plain3);
    exp_plain4 = { font:"40px frank_plain",fill:"#ffffff",align:"center"};
    game.add.text(seaStart+1050,110,'BUSINESS\nSTUDIES',exp_plain4);
    game.add.text(seaStart+1680,100,'ECONOMICS',exp_plain4);
    game.add.text(seaStart+2300,140,'SPORTS\nLOVER',exp_plain4);
    thanks = game.add.text(lastStart+350,ground_height-350,'THANKS FOR\nWATCHING',exp_plain4);
    thanks.alpha = 0;
    game.world.bringToTop(stud);
    game.world.bringToTop(doggy);
}

function showInterests(){
    interest_shown = true;
    i=0;
    interests.forEach((item)=>{
        setTimeout(()=>{
            game.add.tween(item).to({alpha: 1 }, 3500).start();
        },i*1000);
        i++;
    });
}

function isWithDog(){
    if(stud.x < beachStart +400 || stud.x+stud.width+150 > beachEnd)
        doggyVelolcity = 0;
    else if(restFrame==14 && doggy.x+doggy.width>stud.x)
        doggyVelolcity = 450;
    else if(restFrame==15 && doggy.x<stud.x+stud.width)
        doggyVelolcity = 450;
    else
        doggyVelolcity = 350;
}

function onBeach(){
    beachRegion = ( stud.x+stud.width/2 > beachStart && stud.x+stud.width <beachEnd);
}

function raiseRisers(){
    risen = true;
    risers.forEach((item)=>{
        game.add.tween(item).to({y: ground_height-200 }, 1500).start();
    });
    app_logos.forEach((item)=>{
        game.add.tween(item).to({y: ground_height-200-145 }, 1500).start();
    });
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
    console.log("In here");
    if(hitCount>=5)
        return;
    if(targets[hitCount].x+100<game.camera.x+screen_width)
        stones.fireAtXY(targets[hitCount].x,targets[hitCount].y);
}

function inSchool(){
    schoolRegion = (stud.x+stud.width/2 > schoolStart && stud.x+stud.width/2 < schoolEnd);
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
    doggy.body.velocity.x = doggyVelolcity;
    if(schoolRegion) {
        restFrame = 9;
        stud.animations.play('school-right');
    } else if(beachRegion){
        restFrame = 15;
        dogRestFrame = 2;
        stud.animations.play('beach-right');
        if(doggyVelolcity!=0)
            doggy.animations.play('right');
    } else if(stud.x+stud.width > beachEnd && jetski.x+jetski.width + 20 < lastStart){
        if(boat.alpha!=0) {
            boat.alpha = 0;
            stud.alpha = 0;
            doggy.alpha = 0;
            jetski.alpha = 1;
            heroToFollow = jetski;
        }
        stud.body.velocity.x = 0;
        jetski.body.velocity.x = 350;
        jetski.animations.play('right');
    } else if(jetski.x+jetski.width+20>lastStart && jetski.x+jetski.width<lastStart){
        jetski.x = lastStart - jetski.width;
        heroToFollow = stud;
        jetski.alpha = 0;
        boat2.alpha = 1;
        stud.alpha = 1;
        stud.body.velocity.x = 0;
        stud.y = ground_height-stud.height;
        stud.x = lastStart + lastLength/2 - stud.width;
        restFrame = 15;
        celebrate = true;
    } else if(stud.x+stud.width == lastStart + lastLength/2){
        restFrame = 15;
        stud.body.velocity.x = 0;
        game.add.tween(thanks).to({alpha: 1 }, 3500).start();
    } else {
        restFrame = 3;
        stud.animations.play('right');
    }
    if(stud.x > 500 && stud.x+stud.width != lastStart + lastLength/2) {
        mountains.forEach(function (item) {
            item.body.velocity.x = 50;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = 150;
        }, this);
        if(stud.x > 9000)
            picker_crane.forEach(function (item) {
                item.body.velocity.x = 60;
            }, this);
    }
}

function moveLeft() {
    stud.body.velocity.x = -350;
    doggy.body.velocity.x = -1*doggyVelolcity;
    if(schoolRegion) {
        restFrame = 8;
        stud.animations.play('school-left');
    } else if(beachRegion){
        restFrame = 14;
        dogRestFrame = 1;
        stud.animations.play('beach-left');
        if(doggyVelolcity!=0)
            doggy.animations.play('left');
    } else if(jetski.x > beachEnd && jetski.x < beachEnd + 20){
        boat.alpha = 1;
        stud.alpha = 1;
        doggy.alpha = 1;
        jetski.alpha = 0;
        restFrame = 14;
        dogRestFrame = 1;
        heroToFollow = stud;
        stud.animations.play('beach-left');
        doggy.animations.play('left');
        stud.x = beachEnd - stud.width - 20;
    } else if(jetski.x > beachEnd + 20 && jetski.x+jetski.width < lastStart){
        if(boat.alpha!=0) {
            boat.alpha = 0;
            stud.alpha = 0;
            doggy.alpha = 0;
            jetski.alpha = 1;
            heroToFollow = jetski;
        }
        stud.body.velocity.x = 0;
        jetski.body.velocity.x = -350;
        restFrame = 14;
        jetski.animations.play('left');
    }  else if(stud.x+stud.width == lastStart + lastLength/2){
        jetski.alpha = 1;
        boat2.alpha = 0;
        stud.alpha = 0;
        heroToFollow = jetski;
        jetski.body.velocity.x = -350;
        celebrate = false;
    } else {
        restFrame = 2;
        stud.animations.play('left');
    }
    if(stud.x > 500 && stud.x+stud.width != lastStart + lastLength/2) {
        mountains.forEach(function (item) {
            item.body.velocity.x = -50;
        }, this);
        clouds.forEach(function (item) {
            item.body.velocity.x = -150;
        }, this);
        if(stud.x > 9000)
            picker_crane.forEach(function (item) {
                item.body.velocity.x = -60;
            }, this);
    }
}

function forwardButtonPressed(){
    var ptr = game.input.activePointer;
    return (ptr.x>=screen_width-150 && ptr.y>=game_height-150&&ptr.isDown);
}

function backButtonPressed(){
    var ptr = game.input.activePointer ;
    return (ptr.x<=150 && ptr.y>=game_height-150&&ptr.isDown);
}


function openfb(){
    var win = window.open(facebook_url);
    win.focus();
}
function opengithub(){
    var win = window.open(github_url);
    win.focus();
}
function opengmail(){
    var win = window.open("mailto:developer.aarnav100@gmail.com");
    win.focus();
}
function openhackerrank(){
    var win = window.open(hackerrank_url);
    win.focus();
}
function openlinkedin(){
    var win = window.open(linkedin_url);
    win.focus();
}

