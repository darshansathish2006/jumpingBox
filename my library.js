function bounceoff(){
    if (ball.x - box1.x < box1.width/2 + ball.width/2
      && box1.x - ball.x < box1.width/2 + ball.width/2) {
        ball.velocityX = ball.velocityX * (-1);
        box1.velocityX = box1.velocityX * (-1);
  }
  if (ball.y - box1.y < box1.height/2 + ball.height/2
    && box1.y - ball.y < box1.height/2 + ball.height/2){
        ball.velocityY = ball.velocityY * (-1);
        box1.velocityY = box1.velocityY * (-1);
  }
  }