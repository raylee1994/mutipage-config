const utils = require('./util')

module.exports = {
    alias: {
        "src": utils.resolve("src"),
        "components": utils.resolve("src/components"),
        "common": utils.resolve("src/common"),
        "layout": utils.resolve("src/layout")
    },
    extensions: [".js", ".less", ".ejs", ".css"]
}