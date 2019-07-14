var header = require("components/header/index.ejs");
var footer = require("components/footer/index.ejs");
var layout = require("./index.ejs");

module.exports = function(headerData, content) {
    return layout({
        header: header(headerData),
        footer: footer({}),
        content
    })
}