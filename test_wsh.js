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
