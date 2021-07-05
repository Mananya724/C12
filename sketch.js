var garden,rabbit,apple,bomb,gameOverImg
var gardenImg,rabbitImg,bombImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  bombImg= loadImage("bomb.png")
 gameOverImg=loadImage("GameOver.png")
  

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);





bomb=createSprite(random(10,350),40,10,10);
bomb.addImage(bombImg)
bomb.scale=0.1
bomb.velocityY=+5
}
var bombgrp
bombgrp = new Group(bomb);
bombgrp .add(bomb)

function draw() { 
  background(0);
  if(keyDown("right")){
   rabbit.velocityX=+5

  
  }
  if(keyDown("left")){
    rabbit.velocityX=-5
  }
  
  if(rabbit.isTouching( bombgrp )){
  gmaeover=createsprite(200,200)
  gameover.addImage(gameOverImg)
  rabbit.velocityX=0
  }
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.bounceOff("rightEdge")
  rabbit.bounceOff("leftEdge")


  drawSprites();
}


