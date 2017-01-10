var express = require('express');
var stormpath = require('express-stormpath');
var bodyParser = require('body-parser');

var app = express();

app.use(stormpath.init(app, {
	web: {
		produces: ['application/json']
	}
}));

app.on('stormpath.ready', function() {
	app.listen(8080, 'localhost', function(err) {
		if (err) {
			return console.log('error while starting the app ', err.stack);
		}
		console.log('Listening at http://localhost:8080');
	})
})