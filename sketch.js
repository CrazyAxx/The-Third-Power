function setup() {
  createCanvas( 1280 , 800 , WEBGL )
}

function draw() {
  translate( mouseX , mouseY , 0 );
  box( 200 , 200 , 200 );
}
