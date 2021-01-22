var canvas;
var music;
var box;
var rightEdge, leftEdge, bottomEdge, topEdge;
var redsurface, orangesurface, bluesurface, greensurface;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,550);

    // create 4 different surfaces
     redsurface = createSprite(150, 500, 130, 20);
     redsurface.shapeColor = "red";
     orangesurface = createSprite(300, 500, 130, 20);
     orangesurface.shapeColor = "orange";
     bluesurface = createSprite(450, 500, 130, 20);
     bluesurface.shapeColor = "blue";
     greensurface = createSprite(600, 500, 130, 20);
     greensurface.shapeColor = "green";

     rightEdge = createSprite(800, 0, 5, 1100);
     rightEdge.shapeColor = "black";
     leftEdge = createSprite(0, 800, 5, 1600);
     leftEdge.shapeColor = "black";  
     topEdge = createSprite(800, 0, 1600, 5);
     topEdge.shapeColor = "black";
     bottomEdge = createSprite(800, 550, 1600, 5);
     bottomEdge.shapeColor = "black";

     box = createSprite((random(20, 750)), 40, 20, 20);
     box.shapeColor = 255;
     box.velocityY = 5;
     box.velocityX = 5;

}
function draw() {
    background(0);
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(rightEdge);
    box.bounceOff(leftEdge);
    box.bounceOff(bottomEdge);
    box.bounceOff(topEdge);
    
if (redsurface.isTouching(box) && box.bounceOff(redsurface)) {
    box.shapeColor = "red";
    music.play();
}

if (orangesurface.isTouching(box) && box.bounceOff(orangesurface)) {
    box.shapeColor = "orange";
}

if (bluesurface.isTouching(box) && box.bounceOff(bluesurface)) {
    box.shapeColor = "blue";
    box.velocityY = 0;
    box.velocityX = 0;
    music.stop();
}

if (greensurface.isTouching(box) && box.bounceOff(greensurface)) {
    box.shapeColor = "green";
}

    drawSprites();
}