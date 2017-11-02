function setup() {
    createCanvas( windowWidth, windowHeight );
}


let pos_x1 = 0;
let pos_y1 = 0;
let pos_x2 = 25;
let pos_y2 = 25;
let pos_x3 = pos_x2*2;
let pos_y3 = pos_y2*2;
let d = 20;
let r = d/2;

function draw() {
    background( 'rgb(178, 227, 220)' );

    // define drawing parameters


    noStroke();

//biggestellipsepos1

    for( var i=0; i < 24; i++ ) {
        // find the x_pos
        pos_x1 = width * i/25 + r;
        // draw an ellipse
				    fill('rgb(238, 58, 75)');
        ellipse( pos_x1+65, pos_y1, d*3.5 );
    }


//nextellipsepos2d2

		    for( var i=0; i < 24; i++ ) {
		        // find the x_pos
		        pos_x2 = width * i/25 + r;
		        // draw an ellipse
						    fill('rgb(238,58,75)');
		        ellipse( pos_x2*3, pos_y2*3, d*2 );
		    }
//nextellipsepos2
				for( var i=0; i < 24; i++ ) {
						// find the x_pos
						pos_x2 = width * i/25 + r;
						// draw an ellipse
								fill('rgb(238,58,75)');
						ellipse( pos_x2*2, pos_y2*2, d*3 );
				}

//nextellipsepos3
					for( var i=0; i < 24; i++ ) {
														// find the x_pos
														pos_x3 = width * i/25 + r;
														// draw an ellipse
														fill('rgb(238,58,75)');
														ellipse( pos_x3*2.5, pos_y3*2.5, d*3 );

												}
//nextellipsepos3
					for( var i=0; i < 24; i++ ) {
																					// find the x_pos
																					pos_x3 = width * i/25 + r;
																					// draw an ellipse
															fill('rgb(238,58,75)');
															ellipse( pos_x3*3.5, pos_y3*3.5, d );

																			}
//nextellipsepos2
				for( var i=0; i < 24; i++ ) {
						// find the x_pos
						pos_x2 = width * i/25 + r;
						// draw an ellipse
								fill('rgb(238,58,75)');
						ellipse( pos_x2*5, pos_y2*5, d );
				}

//smallestellipsepos2
						for( var i=0; i < 24; i++ ) {
										// find the x_pos
										pos_x2 = width * i/25 + r;
										// draw an ellipse
												fill('rgb(238,58,75)');
										ellipse( pos_x2*6, pos_y2*6, d/2 );
								}

//nextellipsepos3
				for( var i=0; i < 24; i++ ) {
										// find the x_pos
										pos_x3 = width * i/25 + r;
										// draw an ellipse
												fill('rgb(238,58,75)');
										ellipse( pos_x3*3, pos_y3*3, d*2 );

								}



 pos_y1++;
  if (pos_y1 > height) {
       pos_y1 = 0;
    }

		 pos_y2++;
		  if (pos_y2 > height) {
		       pos_y2 = 0;
		    }

				pos_y3++;
		 		if (pos_y3 > height) {
		 				 pos_y3 = 0;
		 			}



}
