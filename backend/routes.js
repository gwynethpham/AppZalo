module.exports = (app) => {
	app.use('/users', require('./containers/users/controller'));
	app.use('/chat', require('./containers/Chat/controller'));
}