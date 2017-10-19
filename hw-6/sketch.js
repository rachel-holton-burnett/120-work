// DEFINE GLOBAL VARIABLES

var bkgColor; // background-color

var cir= {};
cir.pos1x = 10;
cir.pos1y = 50;
cir.pos2x = 40;
cir.pos2y = 20;
cir.pos3x = 5;
cir.pos3y = 8;
cir.pos4x= 15;
cir.pos4y= 75;

cir.color= 'rgb(60, 154, 166)';
cir.color2= 'rgb(60, 174, 166)';
cir.color3= 'rgb(60, 194, 166)';
cir.color4= 'rgb(60, 214, 166)';
cir.color5= 'rgb(60, 234, 166)';
cir.color6= 'rgb(60, 254, 166)';
cir.color7= 'rgb(60, 274, 166)';

var circle_min = 5;
var circle_max;
var a=50;

function setup() {
    bkgColor = color(131, 141, 164);
    createCanvas(windowWidth,windowHeight);
    background(bkgColor);
    frameRate(2);
    circle_max = width - 15;

}


function draw() {


      var circle_size1 = random( 10, width-10 );
      var circle_size2 = random( 20, width-20 );
      var circle_size3 = random( 30, width-30 );
      var circle_size4 = map( mouseX, 0, width, circle_min, circle_max );
      var a= (a+10) % 3;


      fill(cir.color4);
      noStroke();
      ellipse( width/2, height/2, circle_size4 );


          fill(cir.color7);
         noStroke();
         ellipse( width*3, height*3, circle_size3 );

      fill(cir.color);
      noStroke();
      ellipse( width/12, height/12, circle_size1 );


      fill(cir.color2);
      noStroke();
      ellipse( width/6, height/6, circle_size2 );

      fill(cir.color3);
     noStroke();
     ellipse( width/2, height/2, circle_size3 );

     fill(cir.color5);
    noStroke();
    ellipse( width+2, height+2, circle_size1 );


    fill(cir.color6);
   noStroke();
   ellipse( width-22, height-22, circle_size2 );

   fill(cir.color6);
  noStroke();
  ellipse( width-180, height-180, a );




}
