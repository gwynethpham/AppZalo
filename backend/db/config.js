const environment = {
	development : {
		clientHost: 'http://localhost:3000/',
	    connectHost: 'mongodb://localhost/myDB',
	    secret: 'THIS IS USED TO SIGN AND VERIFY TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING',
	},
	staging : {
		clientHost: '',
	    connectHost: 'mongodb://localhost/myDB',
	    secret: 'THIS IS USED TO SIGN AND VERIFY TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING',
	},
	production : {
		clientHost: '',
	    connectHost: 'mongodb://localhost/myDB',
	    secret: 'THIS IS USED TO SIGN AND VERIFY TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING',
	}
}

// console.log('environment',environment[process.env.NODE_ENV])


module.exports={
	...(environment[process.env.NODE_ENV]),
    tokenTime: (5*60*60),
};

