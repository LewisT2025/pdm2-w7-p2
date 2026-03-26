let bg;
let playerX, playerY;

let worldWidth = 1600;
let worldHeight = 1200;

function preload() {
  bg = loadImage("assets/floor.Jpg");
}

function setup() {
  createCanvas(800, 600);

  
  playerX = worldWidth / 2;
  playerY = worldHeight / 2;
}

function draw() {
  background(220);

  
  let speed = 5;

  if (keyIsDown(65)) playerX -= speed; 
  if (keyIsDown(68)) playerX += speed; 
  if (keyIsDown(87)) playerY -= speed; 
  if (keyIsDown(83)) playerY += speed; 

  
  playerX = constrain(playerX, 0, worldWidth);
  playerY = constrain(playerY, 0, worldHeight);

  
  let bgX = width / 2 - playerX;
  let bgY = height / 2 - playerY;

  image(bg, bgX, bgY);

  
  let playerDrawX = width / 2;
  let playerDrawY = height / 2;

  rect(playerDrawX, playerDrawY, 50, 50);
}