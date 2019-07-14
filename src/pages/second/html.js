var layout = require("layout/layout/html.js");
var content = require("./index.ejs");

module.exports = layout({
    pageTitle: "",
    keywords: "",
    description: ""
}, content({}))