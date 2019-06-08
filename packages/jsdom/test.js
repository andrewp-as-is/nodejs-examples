#!/usr/bin/env node

var fs = require("fs");
var jsdom = require("jsdom");
var htmlSource = fs.readFileSync("dummy.html", "utf8");
call_jsdom(htmlSource, function(window) {
    var $ = window.$;
    var title = $("title")
        .text();
    $("h1")
        .text(title);
});

function call_jsdom(source, callback) {
    jsdom.env(
    source, ['jquery-1.7.1.min.js'],

    function(errors, window) {
        process.nextTick(

        function() {
            if (errors) {
                throw new Error("There were errors: " + errors);
            }
            callback(window);
        });
    });
}