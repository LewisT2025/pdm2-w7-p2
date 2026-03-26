let x;
let y;
let backgroundImg;


function preload(){
 backgroundImg = loadImage('assets/backgroudImg.png')
}

function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
}

function draw() {
  playerMovement();
  drawBackground();
  drawPlayer();
}

function drawBackground(){
  background(220);
  image(backgroundImg, 50 + width/2 - x, 50 + height/2 - y);
}

function drawPlayer(){


  fill(200,200,200);
  rect(x + width/2 - x ,   y + height/2 - y, 50, 50);
  fill(100,100,100);
  rect(300 + width/2 - x, 200 +  height/2 - y, 50, 50)
}

function playerMovement(){
  if (keyIsDown(65)) { // a
    x -= 5;
  }
  if (keyIsDown(68)) { // d
    x += 5;
  }
  if (keyIsDown(87)) { // w
    y -= 5;
  }
  if (keyIsDown(83)) { // s
    y += 5;
  }
}
