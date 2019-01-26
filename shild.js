
const config = require('./config');

const { spawn, exec } = require('child_process');

const cmd = function(payload, callback) {
	//console.log(payload);
	exec(payload, (err, stdout, stderr) => {
		if (err) {
			callback('false');
	  	}
		callback(stdout.toString());
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


exports.stopPid = function(callback) {

	let payload = 'ps ax | grep php';

	cmd(payload, function(res) {

		res = filtraPids(res);

		for(i in res) {
			let pid = res[i];

			cmd(`kill -9 ${pid}`, function(aa) {
				//console.log(aa);
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
		if(dados[i].indexOf(config.filerun) > 0) {

			let dPid = dados[i].split(" ")[0];
			if(dPid){
				list.push(dPid);
			}
		}
	}
	return list;
}

exports.findPids = function(callback) {

	let payload = 'ps ax | grep php';

	cmd(payload, function(aa) {
		callback(filtraPids(aa));
	})

}

exports.killPids = function(pid, callback) {

	let payload = 'kill -9' + pid;
	//console.log(prog + ' ' + args);
	cmd(payload, function(aa) {
		callback(aa);
	})

}


//module.exports = [cmd, getPids];