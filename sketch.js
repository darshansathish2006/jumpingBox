var canvas;
var music;
var ball;
var box1,box2,box3,box4;
var wall1,wall2,wall3;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball=createSprite(random(20,750),100,45,45);
    ball.shapeColor=color("white");
    ball.velocityX=8;
    ball.velocityY=8;
    
    box1=createSprite(100,590,190,50);
    box1.shapeColor=color("darkorange");

    box2=createSprite(300,590,190,50);
    box2.shapeColor=color("blue");

    box3=createSprite(500,590,190,50);
    box3.shapeColor=color("green");

    box4=createSprite(700,590,190,50);
    box4.shapeColor=color("maroon");

    wall1=createSprite(805,300,10,600);
    wall2=createSprite(-5,300,10,600);
    wall3=createSprite(400,-5,800,10);
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

     if(wall1.isTouching(ball) && ball.bounceOff(wall1)){}
     if(wall2.isTouching(ball) && ball.bounceOff(wall2)){}
     if(wall3.isTouching(ball) && ball.bounceOff(wall3)){}

     if(box1.isTouching(ball) && ball.bounceOff(box1)){
         music.play();
         ball.shapeColor=color("darkorange");
     }
     if(box2.isTouching(ball) && ball.bounceOff(box2)){
        music.play();
        ball.shapeColor=color("blue");
    }
    if(box3.isTouching(ball)){
        music.stop();
        ball.velocityX=0;
        ball.velocityY=0;
    }
    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        music.play();
        ball.shapeColor=color("maroon");
    }
    
    drawSprites();
}
