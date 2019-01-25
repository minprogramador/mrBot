
const { spawn, exec } = require('child_process');

const cmd = function(prog, args, callback) {

	const ls = spawn(prog, args);
	ls.stdout.on('data', (data) => {
		callback(data.toString());
	});

	ls.stderr.on('data', (data) => {
		callback('false');
	});
};

const execc = function(payload, callback) {

	const ls = exec(payload);
	ls.stdout.on('data', (data) => {
		callback(data.toString());
	});

	ls.stderr.on('data', (data) => {
		callback('false');
	});
};

exports.runPid = function(script) {
	spawn('php', [script], {
		stdio: 'ignore',
	    detached: true
	}).unref();

	return true;
}

exports.stopPid = function() {

	let prog = 'pgrep';
	let args = ['-l', 'php'];

	cmd(prog, args, function(res) {
		res = filtraPids(res);
		for(i in res) {
			let pid = res[i];

			//console.log(pid);
			let prog = 'kill';
			let args = ['-9', pid];
			//console.log(prog + ' ' + args);
			cmd(prog, args, function(aa) {
				//console.log(`${pid} deletado`);
			})
		}
	})

	return true;
}

const filtraPids = function(res) {
	let dados = res.split("\n");
	var list  = [];
	for (i in dados) {
		var final = dados[i].split(" ");
		var final = final[0];
		if(Number(final)) {
			list.push(final);
		}
	}

	return list;
}

exports.findPids = function(callback) {

	let prog = 'pgrep';
	let args = ['-l', 'php'];

	cmd(prog, args, function(aa) {
		callback(filtraPids(aa));
	})

}

exports.killPids = function(pid, callback) {

	let prog = 'kill';
	let args = ['-9', pid];
	console.log(prog + ' ' + args);
	cmd(prog, args, function(aa) {
		callback(aa);
	})

}


//module.exports = [cmd, getPids];