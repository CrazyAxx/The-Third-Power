function setup() {
  createCanvas( windowWidth , windowHeight , WEBGL );
}

function draw() {
  background(200);
  rotateX( framecount * 0.01 );
  rotateY( framecount * 0.01 );
  box( 200 , 200 , 200 );
}
