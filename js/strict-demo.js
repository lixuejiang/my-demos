


function testDefine(){
	a=1;
	console.log(a);
}

function testWith(){
	var v = 1;
// 　　 with (window){ // 语法错误 
// 　　　　v = 2;
// 　　}
}


function testEval(){
	"use strict";
　　var x = 2;
　　console.info(eval("var x = 5; x")); // 5
　　console.info(x); // 2
}

function testThis(){ 
	"use strict";
	console.log(this);
}

function testCaller(){
　　　　"use strict";
　　　　console.log(testCaller.caller,testCaller.arguments);
}