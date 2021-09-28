var database;
var gameState=0;
var playerCount;
var form,player,game;
var car1,car2,car3,car1Img,car2Img,car3img,welcome,welcomeImg;
function preload(){
  car1Img=loadImage("images/carimage1.jpg")
  car2Img=loadImage("images/carimage2.jfif")
  car3img=loadImage("images/carimage3.jpg")
  welcomeImg=loadImage("images/welcome.jpg")
  }
function setup(){
  database = firebase.database();
  
  createCanvas(500,500);

  game=new Game();
game.getState();
game.start();

}

function draw(){
  background("white");

  
}

