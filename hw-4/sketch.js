function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 700, 600 );
}

function draw() {
    // set the background color
        background( 'rgb(164, 54, 13)' );

        /* main sandbox */
        push();

        // set the grid center
        // to canvas center

        translate (110, 150);

        /* body */

        push();

        fill ( 'rgb(101, 2, 117)' );
noStroke();
        triangle (100, 300, 200, 100, 300, 300);
        pop();

        /* left leg */
        push();
        fill ( 'rgb(101, 2, 117)' );
noStroke();
        rect (100,300, 50, 100) ;
        pop();

        /* right leg */
        push();
        fill ( 'rgb(101, 2, 117)' );
noStroke();
        rect (250,300, 50, 100) ;
        pop();


        /* left foot */
        push();
              translate (100, 300);
        fill ( 'rgb(101, 2, 117)' );
        noStroke();
        rect (-35,100,85,35);


        /* left toes*/
        //toe 1
        translate (-30,110);
        fill ( 'rgb(255, 230, 0)' );
        noStroke ();
         triangle (-6, 12, -12, 6, -4, -3);
//toe 2
         translate (-1,15);
         fill ( 'rgb(255, 230, 0)' );
         noStroke ();
          triangle (-6, 12, -12, 6, -4, -3);

pop();

/* right foot */

push();

translate (250,300);
fill ( 'rgb(101, 2, 117)' );
noStroke();
rect (0,100,85,35);

/* right toes*/
//toe 1
translate (80,130);
rotate(PI);
fill ( 'rgb(255, 230, 0)' );
noStroke ();
triangle (-6, 12, -12, 6, -4, -3);

//toe 2
 translate (-1,15);
 fill ( 'rgb(255, 230, 0)' );
 noStroke ();
  triangle (-6, 12, -12, 6, -4, -3);

pop();


/* head */

push();

 translate (60,20);
fill ( 'rgb(101, 2, 117)' );
noStroke();
ellipse(140,95,115,105);


//horn 1
fill ( 'rgb(255, 230, 0)' );
noStroke();
rotate( radians (180) );
 arc( -140, -5, 240, 80, radians(260), radians(280) );

 //horn 2
 fill ( 'rgb(255, 230, 0)' );
 noStroke();
 rotate( radians (-8) );
  arc( -110, -25, 240, 80, radians(260), radians(280) );

  //horn 3
  fill ( 'rgb(255, 230, 0)' );
  noStroke();
  rotate( radians (16) );
   arc( -165, 15, 240, 80, radians(260), radians(280) );
pop();

/* left arm */

push();
translate (35,-5);
rotate( radians(-12) );
fill ( 'rgb(101, 2, 117)' );
noStroke();
rect (50,200, 25, 50) ;

pop();


/* right arm */

push();
translate (245,-30);
rotate( radians(12) );
fill ( 'rgb(101, 2, 117)' );
noStroke();
rect (50,200, 25, 50) ;

pop();

/* face */
//left eye

push();
translate (175,100);
fill ( 'rgb(255, 255, 255)' );
ellipse(0,1,15,15);

pop();
//left eye ball

push();
translate (175,100);
fill ( 'rgb(13, 252, 87)' );
noStroke();
ellipse(0,1,8,8);

pop();

//left eye pupil
push();
translate (175,100);
fill ( 'rgb(0, 0, 0)' );
noStroke();
ellipse(0,1,3,3);

pop();

//right eye

push();
translate (225,100);
fill ( 'rgb(255, 255, 255)' );
ellipse(0,1,15,15);

pop();

//right eye ball

push();
translate (225,100);
fill ( 'rgb(13, 252, 87)' );
noStroke();
ellipse(0,1,8,8);

pop();

//right eye pupil
push();
translate (225,100);
fill ( 'rgb(0, 0, 0)' );
noStroke();
ellipse(0,1,3,3);

pop();


//mouth

push();

translate(60,20);
fill ( 'rgb(0, 0, 0)' );
rotate (radians(300)) ;
arc( -30, 185, 40, 20, radians(0), radians(270), CHORD );



pop();










        /* main sandbox end */
        pop();

      }
