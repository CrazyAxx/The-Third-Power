function setup() {
  createCanvas( windowWidth , windoHeight , WEBGL );
}

function draw() {
  background( windowWidth , windowHeight );
  rotateX( frameCount * 0.01 );
  rotateY( frameCount * 0.01 );
  box( 200 , 200 , 200 );
}
