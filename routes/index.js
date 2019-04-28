var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/leaflet_map', { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error);
    }
});

var Schema = mongoose.Schema;
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});

var Json = mongoose.model('JString', JsonSchema, 'layercollection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});

router.get('/maplayers', function (req, res) {
    Json.find({},{'name': 1}, function (err, docs) {
        res.json(docs);
    });
});

router.get('/map', function(req,res) {
    Json.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 40.78854,
            lng : -73.96374
        });
    });
});

module.exports = router;
