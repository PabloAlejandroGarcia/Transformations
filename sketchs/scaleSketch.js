function drawScaleScript(){
  // Simple way to attach js code to the canvas is by using a function
  function sketchProc(processing) {
    // Override draw function, by default it will be called 60 times per second
    var a = 0.0;
    var s = 0.0;
    processing.setup = function(){
      processing.size(640, 360);
    };
    processing.draw = function() {
      processing.background(102);

      a = a + 0.04;
      s = processing.cos(a)*2;

      processing.translate(processing.width/2, processing.height/2);
      processing.scale(s);
      processing.fill(51);
      processing.rect(0, 0, 50, 50);

      processing.translate(75, 0);
      processing.scale(s);
      processing.fill(255);      
      processing.rect(0, 0, 50, 50);
    };

  }

  var canvas = document.getElementById("canvas2");
  // attaching the sketchProc function to the canvas
  var p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it
}
