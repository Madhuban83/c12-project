var garden,rabbit;
var gardenImg,rabbitImg,appleImg,leafImg;
var apple,orangeLeaf

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
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

orangeLeaf = createSprite(180,340,30,30)
orangeLeaf.scale = 0.09
orangeLeaf.addImage(leafImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  createApples()
  createLeaves()

  drawSprites();
}

function createApples(){

  if(frameCount%80 === 0){
  apple = createSprite(200,0,20,20);
  apple.x = Math.round(random(10,390))
  apple.scale = 0.1;
  apple.addImage(appleImg);
  apple.velocityY = 1; 
  apple.lifetime = 300; 
  }

}

function createLeaves(){

  if(frameCount%80 === 0){
  orangeLeaf = createSprite(200,0,20,20);
  orangeLeaf.x = Math.round(random(10,390))
  orangeLeaf.scale = 0.1;
  orangeLeaf.addImage(leafImg);
  orangeLeaf.velocityY = 1;  
  orangeLeaf.lifetime = 300;
  }
}