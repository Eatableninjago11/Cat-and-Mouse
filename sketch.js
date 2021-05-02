var bg, bgImg;
var cat, cat1Img, cat2Img, cat4Img
var mouse, mouse1Img, mouse2Img, mouse4Img;
function preload() {
    //load the images here
    cat1Img = loadAnimation ("images/cat1.png");
    cat2Img = loadAnimation ("images/cat2.png", "images/cat3.png");
    cat4Img = loadAnimation ("images/cat4.png");

    mouse1Img = loadAnimation("images/mouse1.png");
    mouse2Img = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4Img = loadAnimation("images/mouse3.png");
    
    bgImg =loadImage ("images/garden.png"); 
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    bg = createSprite(400,400,400,400);
    bg.addImage(bgImg);
    

    cat = createSprite (200,200,20,20);
    cat.addAnimation(cat1Img);
    cat.scale= 1;

    mouse = createSprite (50,200,20,20);
    mouse.addAnimation(mouse1Img);
    mouse.scale= 1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x < mouse.width/2 && mouse.x-cat.x < mouse.width/2 && cat.y-mouse.y < mouse.height/2 && mouse.x-cat.x < mouse.width/2 ){
        cat.changeAnimation (cat4Img);
        cat.velocityX =0;

        mouse.changeAnimation(mouse4Img);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyDown (left_arrow)){
        cat.velocityX =-2;
        cat.changeAnimation(cat2Img);

        mouse.changeAnimation(mouse2Img);

    }

}
