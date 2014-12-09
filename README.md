## Visual Computing Slides -- Transformations

Part of the *Visual Computing* course given at [National University of Colombia](http://www.disi.unal.edu.co/) by [Jean Pierre Charalambos](http://otrolado.info) and [Andres Colubri](http://codeanticode.wordpress.com/).

Powered by [reveal](https://github.com/hakimel/reveal.js).

Currently being modified to use [Processing.js](http://processingjs.org/) to insert interactive sketches to the slides.

Made possible thanks to... 

<!--- a long list of students and links to their pages. To come ;) -->

## Setup

 ```sh
 $ git clone https://github.com/VisualComputing/Transformations.git
 $ git checkout gh-pages
 ```

## Folder Structure

    |-- css/
    |-- js/
    |-- plugin/
    |-- lib/
    |-- fig/
    |-- source.md
    
Refer to the [reveal folder structure](https://github.com/hakimel/reveal.js#folder-structure) for more details, and to the *Setup* below.

## Setup

External markdown and speaker notes, require that presentations run from a local web server. The following instructions will set up such a server as well as all of the development tasks needed to make edits to the slides source code.

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Navigate to the presentation folder

 ```sh
 $ cd Transformations
 ```

5. Install dependencies

 ```sh
 $ npm install
 ```

6. Edit the presentation contents using markdown in the `source.md` and adding figures as needed to the `fig/` folder.

7. Serve the presentation and monitor source files for changes

 ```sh
 $ grunt serve
 ```

8. Open <http://localhost:8000> to view your presentation

 You can change the port by using `grunt serve --port 8001`.

## Add sketches with [Processing.js](http://processingjs.org/)

You can add sketchs from [Processing.js](http://processingjs.org/) to the slides. For that, follow these instructions

1.Add the `processing.js` script to the `/lib/js/` folder and add it as a reveal dependency on `config.js`.
 ```JS
{ src: 'lib/js/processing.js', async: true },
 ```
 
2.Create a new javascript file and include it as you did with `processing.js` (Place the new javascript on the `/sketches` folder).
 ```JS
{ src: 'sketchs/mySketch.js', async: true },
 ```
 
3.On your javascript sketch, add a new function.
```JS
function drawMySketch(){
}
```

4.On `config.js`, add a reveal `eventListener` for a desired state, for example:
```JS
Reveal.addEventListener( 'my-state', function() {
  drawMySketch();
}, false );
```

5.On `source.md`, add a new slide with the state you added the reveal `eventListener`, and an empty canvas with an id.
```Markdown
<!-- .slide: data-state="my-state" -->
##My processingjs sketch
<canvas id="my-canvas"></canvas>
```

6.Inside the function of your javascript sketch, add the sketch using the processing setup and draw functions (see [this](http://processingjs.org/learning/) to see how to create javascript only sketches)

7.At the end of the function, add the sketch to your canvas using its id.
```JS
var canvas = document.getElementById("my-canvas");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, sketch);
```


<!---

9. Update to upstream

 ```sh
 $ git remote add reveal.js https://github.com/hakimel/reveal.js.git
 $ git pull reveal.js master
 ```
-->
