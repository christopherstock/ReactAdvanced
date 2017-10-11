"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var tl = require("./tl");
// specify the application title
var APPLICATION_TITLE = "React Task List";
// acclaim debug console and set page title
console.log(APPLICATION_TITLE);
document.title = APPLICATION_TITLE;
// reference the main container
var mainContainer = document.getElementById("mainContainer");
// render the App component into the main container
ReactDOM.render(React.createElement(tl.App, { title: APPLICATION_TITLE }), mainContainer);
//# sourceMappingURL=index.js.map