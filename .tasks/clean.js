const config = require('./paths.json');
var exec = require('child_process').exec;


module.exports = function(done) {
	exec('rm -rf ' + config.dist + '*');
	done();
}
