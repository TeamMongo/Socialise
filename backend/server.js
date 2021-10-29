const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const { connect } = require('./utils/dbconnect');
const { login, protect } = require('./utils/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use(morgan('dev'));
app.post('/login', login);
app.use(protect);
app.use('/user', require('./user/user.controller'));

///protected routes
app.get('*', (req, res) => {
	res.json({ message: 'Verb Not supported' });
});
app.post('*', (req, res) => {
	res.json({ message: 'Verb Not supported' });
});

const start = async () => {
	try {
		await connect();
		app.listen(config.port, () => {
			console.log(
				`Server running in ${config.env} mode at port ${config.port}`
			);
		});
	} catch (e) {
		console.log(e);
	}
};
exports.start = start;
