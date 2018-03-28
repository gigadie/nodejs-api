var faker = require("faker");

exports.getUser = function(req, res) {
	if (!req.header('Authorization')) {
		res.status(401).send({message: 'Unauthorized request'});
	}

	var fn = faker.name.firstName();
	var ln = faker.name.lastName();

	var fakeUser = {
		userProfile: {
			id: faker.random.number(),
			firstName: fn,
			lastName: ln,
			fullName: fn + ' ' + ln,
			email: faker.internet.email(),
			gender: 'M',
			userType: 'User',
			imageUrl: faker.image.people(),
			lastSignedInDate: faker.date.past()
		},
		features: ['home', 'posts'],
		permissions: [],
	};

	res.status(200).send(fakeUser);
};