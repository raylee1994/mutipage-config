
var ejs = require("ejs/ejs.min.js");

export function render(str, data) {
    return ejs.render(str, data);
}
