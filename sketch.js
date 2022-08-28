//Ball variables
let xBall = 300;
let yBall = 200;
let diameter = 15;
let radius = diameter / 2;

//Ball speed variables
let xBallSpeed = 6;
let yBallSpeed = 6;

//Common Racket variables
let wRacket = 10; // Racket width
let hRacket = 90; // Racket Heights

//Left Racket variables
let xLeftRacket = 5; //x position
let yLeftRacket = 150;//y position

//Right Racket variables
let xRightRacket = 585;
let yRightRacket = 150;
let ySpeedRightRacket;

//Score Variables
let leftScore = 0;
let rightScore = 0;

let collision = false;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  createBall();
  ballMovement();
  wallCollision();
  createRacket(xLeftRacket, yLeftRacket);
  leftRacketMovement();
  racketCollision(xLeftRacket, yLeftRacket);
  createRacket(xRightRacket, yRightRacket);
  rightRacketMovement();
  racketCollision(xRightRacket, yRightRacket);
  createScoreBoard();
  scoreCounter();
}

function createBall() {
   circle(xBall, yBall, diameter);
}

function ballMovement() {
  xBall += xBallSpeed;
  yBall += yBallSpeed;
  
}

function wallCollision() {
   if (xBall + radius > width || xBall - radius < 0) {
    xBallSpeed *= -1;
  }
  
   if (yBall + radius > height || yBall - radius < 0) {
    yBallSpeed *= -1;
  }
}

function createRacket(x, y) {
  rect(x, y, wRacket, hRacket);
}

function leftRacketMovement() {
  if (keyIsDown(87)){
    yLeftRacket -= 10;
  }
  if (keyIsDown(83)){
    yLeftRacket += 10;
  }
}

function rightRacketMovement() {
  ySpeedRightRacket = yBall - yRightRacket - wRacket / 2 - 100;
  yRightRacket += ySpeedRightRacket;
}

function racketCollision(x, y) {
 collision = collideRectCircle(x, y, wRacket, hRacket,xBall, yBall, radius)
  
  if (collision) {
    xBallSpeed *= -1;
  }
}

function createScoreBoard(){
  stroke(255);
  textSize(18);
  textAlign(CENTER);
  fill(255, 0, 0);
  rect(180, 10, 40, 20);
  fill(255);
  text(leftScore, 200, 26);
  fill(255, 0, 0)
  rect(380, 10, 40, 20);
  fill(255);
  text(rightScore, 400, 26);
}

function scoreCounter(){
  if (xBall > 590) {
    leftScore += 1;
  }
  
  if(xBall < 10) {
    rightScore += 1;
  }
}
