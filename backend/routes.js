module.exports = (app) => {
	app.use('/users', require('./containers/users/controllers/user'));
	app.use('/chat', require('./containers/Chat/controller'));
}