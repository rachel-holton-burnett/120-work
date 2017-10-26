

var ball = {};
//creating the object ball

ball.width = 100;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
//assigning different qualities to the ball for the size, shape and position

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}



function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;



    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    //if statement to bounce off the width of the screen since if the ball is greater than or equal to width OR less than or equal to 0 then it should be a -1
    //this keeps each ellipse next to eachother as to create the illusion that it's one shape

    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    //if statement to bounce off the width of the screen since if the ball is greater than or equal to height OR less than or equal to 0 then it should be a -1
    //this keeps each ellipse next to eachother as to create the illusion that it's one shape

   if(ball.x>1400 ) {
      fill( 'rgba(159, 11, 238, 1)' );
    }

    else if(ball.y>1400) {
      fill( 'rgba(159, 11, 238, 1)' );
    }

    else if(ball.x>1000 ) {
      fill( 'rgba(97, 11, 238, 1)' );
    }

    else if(ball.y>1000) {
      fill( 'rgba(97, 11, 238, 1)' );
    }

    else if(ball.x>600 ) {
      fill( 'rgb(213, 42, 124)' );
    }

    else if(ball.y>600) {
      fill( 'rgb(213, 42, 124)' );
    }
//each statement to determine the color depending on where it's at

    else {
      fill( 'rgba(50, 11, 238, 1)' ) ;

//if the statements above are false, it will be blue
    }

    noStroke();
    ellipse(ball.x, ball.y, ball.width, ball.width);
//creating the ellipse with a tail behind it

}



function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.5, 10);
    ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
