/*
=== NEXORACODE WORKSPACE NOTES ===
// JavaScript ES6+ & Core Concepts
*/


/* Windows Script Host (WSH) Compatibility */
if (typeof console === 'undefined') {
  var console = {
    log: function(msg) {
      if (typeof WScript !== 'undefined') {
        WScript.Echo(msg);
      }
    }
  };
}

console.log("Heloo my name is pinku");