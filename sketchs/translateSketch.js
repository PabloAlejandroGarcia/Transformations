function drawTranslateScript(){
  // Simple way to attach js code to the canvas is by using a function
  function sketchProc(processing) {
    // Override draw function, by default it will be called 60 times per second
    var x1 = 0;
    var x2 = 0;
    processing.setup = function(){
      processing.size(640, 360);
    };
    processing.draw = function() {
      processing.background(102);


      processing.fill(255);
      processing.translate(x1,0);
      processing.rect(0, 0, 80, 80);

      processing.fill(0);
      processing.translate(x2,100);
      processing.rect(0, 0, 80, 80);

      x1 = (x1 + 0.8) % processing.width;
      x2 = (x2 + 0.8) % processing.width;
    };

  }

  var canvas = document.getElementById("canvas1");
  // attaching the sketchProc function to the canvas
  var p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it
}
