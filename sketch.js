const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;
var plinko=[];
var particles=[];
var division=[];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);

}

function draw() {
  background(0);  
  
  for (var k=0; k<=width;k=k+80){
    division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
}