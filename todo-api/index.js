var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('todo', [ 'tasks' ]);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// curl -X POST localhost:8000/tasks -d "subject=Apple"
app.post('/tasks', function(req, res) {
    var subject = req.body.subject;
    db.tasks.insert({ subject, status: 0 }, function(err, data) {
        res.json(data);
    });
});

app.get('/tasks/:id', function(req, res) {
    var id = req.params.id;
    db.tasks.find({ '_id': mongojs.ObjectId(id) }, function(err, data) {
        res.json(data);
    });
});

app.get('/tasks', function(req, res) {
    db.tasks.find(function(err, data) {
        res.json(data);
    });
});

app.listen(8000, function() {
    // node index.js
    console.log('todo api started at port 8000');
});
