'use strict';

process.env.NTBA_FIX_319 = 1;

const shild = require("./shild");

// this is how we would call the User class indirectly
// var me = new user.User();

//this is how we would call the Uses class directly
shild.findPids(function(res) {
	for(i in res) {
		let pid = res[i];
		console.log(pid);
	}
});

//shild.runPid('/Users/bruno/Desktop/public/demo/main.php');


//console.log('vai');
//deleta pids..

// shild.findPids(function(res) {
// 	for(i in res) {
// 		let pid = res[i];
// 		shild.killPids(pid, function(rp) {
// 			console.log(rp);
// 		})
// 		//console.log(pid);
// 	}
// });


//console.log(v);

// shild.getPid(function(aa) {
// 	console.log(aa);
// })

// console.log(a);
// joe.name = "Joe";
// joe.email = "email@test.com";

//console.log(joe.name, joe.email);