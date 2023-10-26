function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
   var numS = (width*height)/(10*10)
  
  var r=0;
  var g=50;
  var b=255;
  
  for(var i=0; i < numS; i+=40)
    {
      for(var j=0; j<numS; j+=40)
        {
          noStroke()
          fill(r,g,b);
          square(i,j,40);
          r+=40;
          
        }
      r=0;
      g+=25;
      b-=20;
    }
}