var express = require('express');
var app = express();
var morgan = require('morgan');           
var bodyParser = require('body-parser');   
var cors = require('cors');
console.log('Server loading....')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended' : 'true' }));
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT', 'GET');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Make sure to put this directly after you define your app
// dont change if you want http -> https
// if you want https -> http change !req.secure to req.secure and https to http
app.set('trust proxy', true); // <- required
app.use((req, res, next) => {
  if(req.secure) return res.redirect('http://' + req.get('host') + req.url);
  next();
});

app.use(express.static('www'));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})

