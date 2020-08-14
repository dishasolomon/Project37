const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var playerBall;
var line1,line2,line3,line4;
var obstacle1,obstacle2,obstacle3,obstacle4;

var gameState = "start";

function preload(){
}

function setup() {
  createCanvas(displayWidth, displayHeight - 115);

  engine = Engine.create();
  world = engine.world;

  playerBall = new PlayerBall(50,220,130);

  line1 = new Line(0,175,displayWidth+1500,10);
  line2 = new Line(0,350,displayWidth+1500,10);
  line3 = new Line(0,525,displayWidth+1500,10);
  line4 = new Line(0,700,displayWidth+1500,10);

  //line1.x = line1.displayWidth/2;
}

function draw() {
  background(255,0,255); 

  playerBall.display();

  /*if (line1.x < 0){
    line1.x = line1.width/2;
  }*/

  line1.display();
  line2.display();
  line3.display();
  line4.display();

  if(gameState === "start"){
    textSize(30);
    fill("black");
    text("Press space to play",500,300);
    textSize(15);
    text("Use UP_ARROW and DOWN_ARROW keys to move the ball around the obstacles",800,625);
    text("Press and hold to move faster!",800,650);

    if(keyCode === 32){
      gameState = "playing";
    }
  }

  if(gameState === "playing"){
    playerBall.x = playerBall.x +20;
    camera.position.x = playerBall.x +600;

    line1.w = line1.w + 50;
    line2.w = line2.w + 50;
    line3.w = line3.w + 50;
    line4.w = line4.w + 50;

    if(keyDown("UP_ARROW")){
      playerBall.y = playerBall.y-175;
      
      if(playerBall.y < -130){
        playerBall.y = playerBall.y+175;
      }
    }

    if(keyDown("DOWN_ARROW")){
      playerBall.y = playerBall.y+175;

      if(playerBall.y > 395){
        playerBall.y = playerBall.y-175;
      }
    }

    spawnObstacles();
  }
}

function spawnObstacles() {

  if(frameCount % 60 === 0){
    var rand = Math.round(random(1,4));
    
    switch(rand){
      case 1: obstacle1 = new Obstacle(playerBall.x+1000,45,100,100);
        obstacle1.display();
        break;
      case 2: obstacle2 = new Obstacle(playerBall.x+1000,220,100,100);
        obstacle2.display();
        break;
      case 3: obstacle3 = new Obstacle(playerBall.x+1000,300,100,100);
        obstacle3.display();
        break;
      case 4: obstacle4 = new Obstacle(playerBall.x+1000,395,100,100);
      obstacle4.display();
        break;
        default:break;
    }
  }
}
