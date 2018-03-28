var faker = require("faker");

exports.login = function(req, res) {
	if (!req.body) {
		res.status(400).send({message: 'invalid request supplied'});
	}

	var auth = {
		refresh_token: faker.random.uuid(),
		access_token: faker.random.uuid(),
		expiry_date: 3600
	};

	res.status(200).send(auth);
};

exports.revoke = function(req, res) {
	res.status(200);
};