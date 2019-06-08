#!/usr/bin/env node

function func() {
	console.log("func");
}
x=2
x == 2 && function (){
	console.log("func");
}()
