var appRouter = function (app) {
	var posts = require('../controllers/posts');
	var token = require('../controllers/token');
	var user = require('../controllers/user');

	app.get('/api', function(req, res) {
		res.status(200).send('Welcome to this simple restful API');
	});

	app.route('/api/token')
		.post(token.login);
	app.route('/api/token/revoke')
		.post(token.revoke);

	app.route('/api/user')
		.get(user.getUser);

	app.route('/api/posts/:num')
		.get(posts.list_all_posts);
}

module.exports = appRouter;