var randomString = require( 'random-string' );

function getHello( input ) {
	return 'hello ' + input + ' ' + randomString();
}

module.exports = getHello;
