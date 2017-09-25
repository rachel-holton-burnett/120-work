// Declare the setup function
function setup() {

    // create the canvas size
    createCanvas( 800, 800 );

    // color the background 'teal'
    background( 'teal' );
}
// Declare the draw function
function draw() {

    // tell p5 to print the text string "Hello World!"
    // This is going to be positioned at ( x: 100, y: 400 ).
    // I wanted to increase the size of the text to 100. I know this wasn't part of the instructions but I saw the code on the p5 reference site. I hope this okay. 
    textSize (100)
    text( "Hello World!", 100, 400 )
    ;
}
