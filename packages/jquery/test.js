#!/usr/bin/env node

url = "https://twitter.com/KingsRoadGame";
var curl = require('child_process').spawn('curl',[url]);
var html = '';

curl.stdout.on('data', function (data) {
    html += data;
}).on('end', function() {
	$ = require('jquery');
    var text = $(html).find('.ProfileTweet').find('.ProfileTweet-text').first().text();
    console.log(text);
});
