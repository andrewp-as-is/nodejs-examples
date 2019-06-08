#!/usr/bin/env node

if (process.stdin.constructor.name=="Socket") { // stdin
  	var data = '';
	process.stdin.on('readable', function() {
	    var chunk = this.read();
	    if (chunk != null) { data += chunk; }
	});
	process.stdin.on('end', function() {
	   console.log(data.trim());
	});
}


