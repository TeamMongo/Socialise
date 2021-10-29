const config = require('../config');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const { User } = require('../user/user.model');

const client = new OAuth2Client(config.client_id);

// generate new token
exports.newToken = (user) => {
	return jwt.sign({ id: user.id }, config.secrets.jwt, {
		expiresIn: config.secrets.jwtExp,
	});
};
// exports.newToken = newToken;

// verifies a given token and returns payload {id:mongoid}
exports.verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, config.secrets.jwt, (err, payload) => {
			if (err) return reject(err);
			resolve(payload);
		});
	});
};
// exports.verifyToken = verifyToken;

async function verify(token) {
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: config.client_id,
	});
	const payload = ticket.getPayload();
	// const userid = payload["sub"];
	return payload;
}

//for first Time user
exports.login = async (req, res) => {
	if (!req.body.idToken) {
		return res.status(400).json({ message: 'need Token' });
	}
	try {
		const payload = await verify(req.body.idToken);
		if (
			payload.aud !== config.client_id ||
			payload.iss !== 'accounts.google.com'
		) {
			return res.status(400).json({ message: 'unknown client' });
		}
		let user = await User.findOne({ gid: payload.sub }).exec();
		if (!user) {
			user = await User.create({
				...payload,
				gid: payload.sub,
				newuser: true,
			});
		}
		const token = this.newToken(user);
		return res.status(201).json({ token: token, user: user });
	} catch (e) {
		console.log(e.message);
		return res.status(500).end();
	}
};

exports.protect = async (req, res, next) => {
	const bearer = req.headers.authorization;
	if (!bearer || !bearer.startsWith('Bearer')) {
		return res.status(401).json({ message: 'unauthorised' });
	}
	const token = bearer.split('Bearer ')[1].trim();
	let payload;
	try {
		payload = await this.verifyToken(token);
	} catch (e) {
		return res.status(401).json({ message: 'unauthorised' });
	}
	const user = await User.findById(payload.id).lean().exec();
	if (!user) {
		return res.status(401).end();
	}
	req.user = user;
	next();
};
