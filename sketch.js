function setup() {
  createCanvas( 1280 , 800 , WEBGL )
}

function draw() {
  //background( 1380 , 900 );
  rotateX( frameCount * 0.01 );
  rotateY( frameCount * 0.01 );
  translate( mouseX , mouseY , 0 );
  box( 200 , 200 , 200 );
}
