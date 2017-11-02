function setup() {
    // create a canvas
    createCanvas( 1800,900);
frameRate ( 25 );

}

//variables for stars


var starWidth1 = 25;
var starHeight1 = 25;
var starWidth2 = 15;
var starHeight2 = 15;
var starWidth3 = 5;
var starHeight3 = 5;
var starFill = ( 'rgb(237, 189, 66)' );
var starFill2= ( 'rgb(241, 123, 13)' );
var posX= 1;
var posY= 1;

function draw() {

    background( 'rgb(5, 41, 64)' );
    // turn the cursor off
    noCursor();

if (frameCount % 9 === 5 ) {
  posX = 345;
  posY= 10;
}

push();

//stars sandbox

  fill (starFill);
  noStroke();
  ellipse ( posX, posY, starWidth1, starHeight1 );
  posX = posX -150;
  posY = posY -150;

  fill (starFill2);
  noStroke();
  ellipse ( posX, posY, starWidth2, starHeight2 );

  posX = posX - 25;
  posY = posY - 25;


  fill (starFill);
  noStroke();
  ellipse ( posX, posY, starWidth3, starHeight3 );

  posX = posX + 35;
  posY = posY + 10;

  fill (starFill2);
  noStroke();
  ellipse ( posX, posY, starWidth2, starHeight2 );

  posX = posX + 55;
  posY = posY + 35;


  fill (starFill);
  noStroke();
  ellipse ( posX, posY, starWidth2, starHeight2 );

  posX = posX + 85;
  posY = posY + 85;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX + 150;
posY = posY + 150;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX + 150;
posY = posY + 150;


fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight2 );

posX = posX + 45;
posY = posY - 15;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX + 50;
posY = posY + 50;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 250;
posY = posY + 220;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight3 );

posX = posX + 10;
posY = posY - 75;

fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX - 95;
posY = posY + 55;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 45;
posY = posY + 87;

fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX + 1;
posY = posY + 5;


fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight2 );

posX = posX + 55;
posY = posY - 8;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX -100;
posY = posY - 50;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 25;
posY = posY + 22;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight3 );

posX = posX + 10;
posY = posY - 75;

fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX - 95;
posY = posY + 55;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 45;
posY = posY + 87;


fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight3 );

posX = posX + 10;
posY = posY - 75;

fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX - 95;
posY = posY + 55;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 45;
posY = posY + 87;

fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX + 12;
posY = posY + 50;


fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth2, starHeight2 );

posX = posX + 7;
posY = posY - 40;

fill (starFill);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight1 );
posX = posX -60;
posY = posY - 80;


fill (starFill2);
noStroke();
ellipse ( posX, posY, starWidth1, starHeight2 );
posX = posX + 20;
posY = posY + 20;

fill (starFill);
noStroke();
ellipse ( 85, 85, starWidth2, starHeight3 );


fill (starFill2) ;
noStroke();
ellipse ( 50, 50, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 25, 25, starWidth1, starHeight2 );

fill (starFill2);
noStroke();
ellipse ( -85, -85, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 1150, 750, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 175, 175, starWidth1, starHeight2 );

fill (starFill);
noStroke();
ellipse ( 285, 285, starWidth2, starHeight3 );


fill (starFill2) ;
noStroke();
ellipse ( 350, 350, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 425, 425, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 585, 292, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 200, 775, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 75, 275, starWidth1, starHeight2 );


fill (starFill) ;
noStroke();
ellipse ( 950, 850, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 975, 875, starWidth1, starHeight2 );

fill (starFill);
noStroke();
ellipse ( 785, 685, starWidth2, starHeight3 );


fill (starFill2) ;
noStroke();
ellipse ( 550, 450, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 1425, 225, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 785, 587, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 650, 550, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 1975, 475, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 1550, 450, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 1300, 225, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 1785, 587, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 1650, 550, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 1745, 475, starWidth1, starHeight2 );

fill (starFill);
noStroke();
ellipse ( 1000, 85, starWidth2, starHeight3 );


fill (starFill2) ;
noStroke();
ellipse ( 1550, 450, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 985, 25, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 1005, 58, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 1650, 550, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 995, 45, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 1500, 450, starWidth1, starHeight1 );


fill (starFill);
noStroke();
ellipse ( 1395, 225, starWidth1, starHeight2 );

fill (starFill2) ;
noStroke();
ellipse ( 1685, 587, starWidth2, starHeight3 );


fill (starFill) ;
noStroke();
ellipse ( 1025, 550, starWidth1, starHeight1 );


fill (starFill2);
noStroke();
ellipse ( 1745, 25, starWidth1, starHeight2 );

pop();

//moon
push();
translate(1000,300);
fill('rgb(164, 161, 164)');
noStroke();
ellipse(500,10,450,450);

//moonspots

translate(1,5);
fill('rgb(87, 83, 87)');
noStroke();
ellipse(500,10,150,130);

translate(66,25);
fill('rgb(87, 83, 87)');
noStroke();
ellipse(500,10,80,60);

translate(66,25);
fill('rgb(87, 83, 87)');
noStroke();
ellipse(500,10,55,35);

translate(215,-145);
fill('rgb(87, 83, 87)');
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
pop();




















  }
