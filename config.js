// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

  // Parallax scrolling
  // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
  // parallaxBackgroundSize: '2100px 900px',
  //added by Pierre:
  math: {
    mathjax: 'http://cdn.mathjax.org/mathjax/latest/MathJax.js',
    config: 'TeX-AMS_HTML-full'  // See http://docs.mathjax.org/en/latest/config-files.html
  },

  // Optional libraries used to extend on reveal.js
  dependencies: [
  { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
  { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
  { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
  { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
  //added by Pierre:
  { src: 'plugin/math/math.js', async: true },
  //added by PabloAlejandroGarcia
  { src: 'lib/js/processing.js', async: true },
  { src: 'sketchs/translateSketch.js', async: true },
  { src: 'sketchs/scaleSketch.js', async: true },
  { src: 'sketchs/rotateSketch.js', async: true }
  ]
});
//While trrying to fix mathjax with markdown added all three by Pierre:
Reveal.addEventListener( 'slidechanged', function( event ) {
  //MathJax.Hub.Rerender();
} );
Reveal.addEventListener( 'fragmentshown', function( event ) {
  // event.fragment = the fragment DOM element
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
  // event.fragment = the fragment DOM element
} );
//Added by PabloAlejandroGarcia
Reveal.addEventListener( 'translate-state', function() {
  drawTranslateScript();
}, false );
Reveal.addEventListener( 'scale-state', function() {
  drawScaleScript();
}, false );
Reveal.addEventListener( 'rotate-state', function() {
  drawRotateScript();
}, false );
