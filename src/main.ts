/* global chrome */

chrome.devtools.panels.create('CMX', '', 'main.html', function(panel) {
    console.log('main panel do stuff');
});
