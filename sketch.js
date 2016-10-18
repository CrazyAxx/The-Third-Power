function setup() {
  createCanvas( 1280 , 800 , WEBGL );
}

  var x=200
  var y=200
  var z=200

function draw() {
  background( 1380 , 900 );
  rotateX( frameCount * 0.01 );
  rotateY( frameCount * 0.01 );
  box( x , y , z );
  x=x+.01
  y=y+.01
  z=z+.01
}
