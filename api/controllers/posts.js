var faker = require("faker");

exports.list_all_posts = function(req, res) {
	if (!req.header('Authorization')) {
		res.status(401).send({message: 'Unauthorized request'});
	}

	var posts = [];
	var num = req.params.num;

	if (isFinite(num) && num  > 0 ) {
		for (var i = 0; i <= num-1; i++) {
			posts.push({
				postId: faker.random.number(),
				title: faker.name.title(),
				content: faker.lorem.paragraph()
			});
		}
		res.status(200).send(posts);
	} else {
		res.status(400).send({ message: 'invalid number supplied' });
	}
};