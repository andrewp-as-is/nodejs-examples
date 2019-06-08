#!/usr/bin/env node

fs = require('fs');
var content = fs.readFileSync('/etc/hosts', 'utf8')
console.log("content is" + content);