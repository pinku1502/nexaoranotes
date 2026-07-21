const wshPolyfill = `
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
`;
const header = '=== NEXORACODE WORKSPACE NOTES ===\n';
const noteText = '// JavaScript ES6+ & Core Concepts';
const codeText = 'console.log("Heloo my name is pinku");';
let fileContent = `/*\n${header}${noteText}\n*/\n\n`;
fileContent += wshPolyfill + '\n' + codeText;

const fs = require('fs');
fs.writeFileSync('c:/Users/Lenovo/Desktop/web/test_generated.js', fileContent);
