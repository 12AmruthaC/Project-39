var canvas;
var music;
var surface1,surface2,surface3,surface4;
var sprite;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,590,180,20)
    surface1.shapeColor="RED"

    surface2=createSprite(300,590,180,20)
    surface2.shapeColor="GREEN"

    surface3=createSprite(500,590,180,20)
    surface3.shapeColor="BLUE"

    surface4=createSprite(700,590,180,20)
    surface4.shapeColor="YELLOW"

    //create box sprite and give velocity
    sprite=createSprite(random(20,750),300,20,20)
    sprite.shapeColor="WHITE"
    sprite.velocityX=3;
    sprite.velocityY=3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(sprite.x<0){
    music.stop()
    sprite.VelocityX=3;
}

if(sprite.x>800){
    music.stop()
    sprite.VelocityX=3;
}
    //add condition to check if box touching surface and make it box
if(surface1.isTouching((sprite) && sprite.bounceOff(edges)){
    music.stop();
    sprite.VelocityX=0;
    sprite.changeColor="RED";
}

if(surface2.isTouching((sprite) && sprite.bounceOff(edges)){
    music.play();
    sprite.VelocityX=0;
    sprite.changeColor="GREEN";
}

if(surface1.isTouching((sprite) && sprite.bounceOff(edges)){
    music.stop();
    sprite.VelocityX=0;
    sprite.changeColor="BLUE";
}

if(surface1.isTouching((sprite) && sprite.bounceOff(edges)){
    music.play();
    sprite.VelocityX=0;
    sprite.changeColor="YELLOW";
}

}
