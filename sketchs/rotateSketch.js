function drawRotateScript(){
  // Simple way to attach js code to the canvas is by using a function
  function sketchProc(processing) {
    // Override draw function, by default it will be called 60 times per second
    var angle1 = 0;
    processing.setup = function(){
      processing.size(640, 360);
    };
    processing.draw = function() {
      processing.background(102);

      processing.pushMatrix();
      processing.fill(255);
      processing.translate(processing.width/2, processing.height/2);
      processing.rotate(processing.radians(angle1));
      processing.rect(0, 0, 50, 50);
      processing.fill(0);
      processing.rotate(processing.radians(angle1));
      processing.rect(90, 90, 30, 30);
      processing.popMatrix();
      angle1 = (angle1 + 0.8) % 360;
    };

  }

  var canvas = document.getElementById("canvas3");
  // attaching the sketchProc function to the canvas
  var p = new Processing(canvas, sketchProc);
  // p.exit(); to detach it
}
