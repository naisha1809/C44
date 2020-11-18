
var man,man1;
var ground;
var bg1;

function preload(){ 
    man1 = loadAnimation("IMAGES/soldier.png","IMAGES/soldier1.png");

    bg1 = loadImage("IMAGES/bg2.jpg");
}    

function setup(){
    createCanvas(800, 400);

    man = createSprite(400,200);
    man.addAnimation("running",man1);
    man.scale = 0.5;

    ground = createSprite(400,380,800,10);
}

function draw(){
    background(bg1);

    drawSprites();
}