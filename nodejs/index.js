var express = require('express');
var app = express();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://192.168.59.103:32768/docker-test');
var port = 8080;

connection.once('open', function() {
	var pessoaSchema = new Schema({
		_id: String,
		name: String,
		age: Number
	});

	var Pessoa = connection.model('pessoa', pessoaSchema);

	app.get('/pessoas', function(req, res) {
		Pessoa
			.find({})
			.exec(function(err, docs) {
				if (err) throw err;

				res.json(docs);
			});
	});

	app.listen(port, function() {
		console.log('Server running on port ' + port);
	});
});