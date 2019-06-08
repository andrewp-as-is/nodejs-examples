#!/usr/bin/env node

$ = require('jquery');

doc = $("<ul><li>li1</li><li>li2</li><li>li3</li></ul>");
for each (var index in doc) {
  console.log(index.path);
}
