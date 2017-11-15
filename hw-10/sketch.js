var starSize = [25,15,5];

function setup() {
    // create a canvas
    createCanvas( 1800,900);
frameRate ( 25 );

}

  var starFill = ( 'rgb(237, 189, 66)' );
  var starFill2= ( 'rgb(241, 123, 13)' );
  var posX= 1;
  var posY= 1;


function draw() {

    background( 'rgb(5, 41, 64)' );
    // turn the cursor off
    noCursor();
    movingStars(1,25,1,1);
    movingStars(1,450,1,1);
    movingStars(75,250,1,2);
    movingStars(-75,150,1,2);
    movingStars(500,50,1,2);
    movingStars(-800,150,1,2);
    stillStars(-400,60,1,2);
    stillStars(620,90,1,2);
    stillStars(770,55,1,2);
    stillStars(65,400,1,2);
    stillStars(685,-285,1,2);
    stillStars(360,-360,1,2);
    stillStars(55,-160,1,2);
    stillStars(225,-160,1,2);
    stillStars(-741,-232,1,2);
    stillStars(1100,190,1,2);
    stillStars(-1070,-555,1,2);
    stillStars(-865,-40,1,2);
    stillStars(-685,1285,1,2);
    stillStars(-360,1360,1,2);
    stillStars(855,560,1,2);
    stillStars(805,360,1,2);
    stillStars(550,232,1,2);

//moon
push();
translate(1000,300);
fill('rgb(164, 161, 164)');
noStroke();
ellipse(500,10,450,450);

//moonspots

translate(1,5);
fill('rgba(133, 128, 133, 0.85)');
noStroke();
ellipse(500,10,150,130);

translate(66,25);
fill('rgba(133, 128, 133, 0.85)');
noStroke();
ellipse(500,10,80,60);

translate(66,25);
fill('rgba(133, 128, 133, 0.85)');
noStroke();
ellipse(500,10,55,35);

translate(215,-145);
fill('rgba(133, 128, 133, 0.85)');
noStroke();
ellipse(5,10,100,75);

pop();
//rocket sandbox

//rocket body

push();

translate( mouseX, mouseY );
fill ('rgb(86, 82, 91)');
noStroke();
translate (10,10);
rect (40,75,55,140);

//rocketsideright
 push();

fill ('rgb(86, 82, 91)');
translate (27,130);
noStroke();
triangle (40, 85, 68, 50, 95, 85);

//rocketsideleft

fill ('rgb(86, 82, 91)');
translate (-54,0);
noStroke();
triangle (40, 85, 68, 50, 95, 85);

pop();


//rocketbodydetails
push();

translate(10,10);
fill ('rgb(22, 21, 22)');
noStroke();
ellipse(58,165,15,55);

pop();


//rockettop
push();

fill ('rgb(86, 82, 91)');
noStroke();
triangle (40, 85, 68, 30, 95, 85);

//rocketbottom

fill ('rgb(255, 71, 3)');
noStroke();
translate (115,280);
triangle (-20, -65, -48, -10, -75, -65);

fill ('rgb(255, 116, 3)');
noStroke();
translate (0,10);
triangle (-20, -65, -48, -10, -75, -65);

fill ('rgb(255, 177, 3)');
noStroke();
translate (0,10);
triangle (-20, -65, -48, -10, -75, -65);

pop();

  }

  function movingStars(x,y,w,h) {
    push();
    translate(x,y);
    scale(w,h);

    fill (starFill);
    noStroke();
    ellipse((frameCount % 175) *10,70,15,15);

    fill(starFill2);
    ellipse((frameCount % 150) *15,17,25,15);

pop();

  }

  function stillStars(x,y,w,h) {
    push();
    translate(x,y);
    scale(w,h);

    fill (starFill);
    noStroke();
    ellipse ( 85, 85, starSize [0], starSize [1] );

    fill (starFill2);
    noStroke();
    ellipse ( -250, 100, starSize [1], starSize [1] );

    fill (starFill);
    noStroke();
    ellipse ( 65, 105, starSize [0], starSize [2] );

    fill (starFill2);
    noStroke();
    ellipse ( 385, -45, starSize [2], starSize [2] );

    fill (starFill);
    noStroke();
    ellipse ( 65, 150, starSize [1], starSize [2] );

    fill (starFill2);
    noStroke();
    ellipse ( 75, 195, starSize [0], starSize [0] );

pop();
}
