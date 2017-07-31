//keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
	module.exports = require('./prod');
} else {
	// we are in dev - return the dev keys
	module.exports = require('./dev');
}