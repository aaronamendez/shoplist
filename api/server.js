const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// app uses cors for cross origin requests
app.use(cors());
// app uses bodyParser for cross origin request and response data
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const data = [];

app.get('/', (req, res) => {
	res.json(data);
});

app.post('/', (req, res) => {
	const item = req.body;
	data.push(item);
});

app.listen(5000, () => {
	console.log('Listening on port 5000...');
});
