var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet,bulletG,hearts;
var zombie,zombieG;
var zombieKilled = 0;
var victory,gameOver;
var hit = 0;
function preload(){
  
  shooterImg = loadImage("shooter_2.png")
  shooter_shooting = loadImage("shooter_3.png")
  shooter2 = loadImage("shooter_1.png")

  bgImg = loadImage("bg.jpeg")
  bulletSound = loadSound("explosion.mp3")
  heart1 = loadImage("heart_1.png")
  heart2 = loadImage("heart_2.png")
  heart3 = loadImage("heart_3.png")
  zombieImg = loadImage("zombie.png")
  victoryImg  = loadImage("Daco_367155.png")
  gameOverImg = loadImage("toppng.com-game-over-870x630.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;
    
  zombieG = new Group();
  bulletG = new Group();
  
  
  //creating the player sprite
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
     player.scale = 0.3;
     player.debug = true;
     player.setCollider("rectangle",0,0,300,300);
  
  hearts = createSprite(100,50,20,20);
  hearts.addImage(heart3);
  hearts.scale = 0.3;
  
  victory = createSprite(displayWidth/2-10,displayHeight/2,50,50);
  victory.addImage(victoryImg);
  victory.scale = 0.9;
  victory.visible = false;

 gameOver = createSprite(displayWidth/2-10,displayHeight/2,50,50);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.9;
 gameOver.visible = false;
  
 

}

function draw() { 
  background(0); 
  
  


  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  createBullets();
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)

  zombieG.add(zombie);
  bulletG.add(bullet);
}
if(bulletG.isTouching(zombieG)){
  zombieG.destroyEach();
  bulletG.destroyEach();
  zombieKilled = zombieKilled+1;
}

if(zombieG.isTouching(player)){
  hearts.addImage(heart2);
  zombieG.destroyEach();
  hit = hit+1;
}

if(hit === 2){
  hearts.addImage(heart1);;
}

if(hit === 3){
  hearts.visible = false;
  player.destroy();
  zombieG.destroyEach();
  gameOver.visible = true;
}
if(zombieKilled === 10){
  victory.visible = true;
  zombie.velocityX = 0;
  player.addImage(shooter2);
  
}


  

drawSprites();
if(zombieKilled<10){
  textSize(20);
  fill("red");
    text('Your Goal is to kill 10 zombies. Good Luck!',250,50);
    createZombies();
    
  } 
  

}
function createBullets(){
  bullet = createSprite(player.x,player.y,10,10);
  bullet.velocityX =10;
  bullet.shapeColor = "yellow";
  bulletSound.play();
  bulletG.add(bullet);
}

function createZombies(){
  if(frameCount%50===0){
    zombie = createSprite(1000,random(500,900),50,50);
    zombie.velocityX = -10;
    zombie.addImage(zombieImg);
    zombie.scale = 0.15;
    zombieG.add(zombie);
    zombie.debug = true;

  }
  
  
}

  

