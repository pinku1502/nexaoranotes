const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

const html = fs.readFileSync('typescript-course.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

dom.window.onerror = function(msg, source, lineno, colno, error) {
    console.error('BROWSER ERROR:', msg);
};

dom.window.document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded. No errors caught!');
});

// We can just wait for a few seconds to let scripts execute
setTimeout(() => {
    console.log('Test finished.');
}, 2000);
