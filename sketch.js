var cat1,cat2,cat3,cat4,cat1Img,cat2Img,cat3Img;
var mouse1,mouse2,mouse3,mouse4,mouse1Img,mouse2Img,mouse3Img;
var garden,gardenImg;

function preload() {
    //load the images here
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");

    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");

    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    catRunning=createSprite(800,600,20,20);
    catRunning.scale=0.2;

    catRunning.addAnimation("start",cat1Img);

    catRunning.addAnimation("moving",cat2Img);

    catRunning.addAnimation("stop",cat3Img);

    mouse=createSprite(100,600,20,20);
    mouse.scale=0.2;

    mouse.addAnimation("start",mouse1Img);

    mouse.addAnimation("moving",mouse2Img);

    mouse.addAnimation("end",mouse3Img);
    
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(catRunning.x-mouse.x<(catRunning.width-mouse.width)/2){
        catRunning.changeAnimation("stop");
        mouse.changeAnimation("end");
        //catRunning.collide(mouse);
        catRunning.velocityX=0;
        catRunning.x=200;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      catRunning.velocityX=-5;
      catRunning.changeAnimation("moving",cat2Img)

      mouse.changeAnimation("moving");

    text(mouseX + ','+mouseY,10,45);

  }

}
