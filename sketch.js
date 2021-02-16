var edges;
var canvas;
var music;
var bluesurface,orangesurface,purplesurface,greensurface;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas =  createCanvas(500,600);
    
    //create 4 different surfaces
    bluesurface = createSprite(50,590,120,20);
    bluesurface.shapeColor = "blue";

    orangesurface = createSprite(180,590,120,20);
    orangesurface.shapeColor = "orange";

    purplesurface = createSprite(310,590,120,20);
    purplesurface.shapeColor = "purple";

    greensurface = createSprite(440,590,120,20);
    greensurface.shapeColor = "green";


    //create box sprite and give velocity
    
    box = createSprite(random(20,750),100,20,20);
    box.shapeColor = "white";
    box.velocityX  = -4;
     box.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    
    music.play();

    //create edgeSprite
   edges = createEdgeSprites();
    box.bounceOff(edges);
    
    
    
//add condition to check if box touching surface and make it box
if(bluesurface.isTouching(box)&& box.bounceOff(bluesurface)){
    box.shapeColor = "blue";

}

if(purplesurface.isTouching(box)&& box.bounceOff(purplesurface)){
    box.shapeColor = "purple";
    
}
if(greensurface.isTouching(box)&& box.bounceOff(greensurface)){
    box.shapeColor = "green";

}
if(orangesurface.isTouching(box)){
    box.shapeColor = rgb(255,128,0);
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}

drawSprites();

}    
