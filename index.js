var cool = require('cool-ascii-faces');
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const path           = require('path');
const http           = require('http');
const db             = require('./config/db');
const company_routes = require('./server/routes/company_routes');
const app            = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//// localhost use only
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

MongoClient.connect(db.url, (err, database) => {

  if (err) {  console.log("FAILED"); return console.log(err);}
  else console.log("MongoDb connected");
  require('./server/routes')(app, database);

  app.get('*', (req, res) => {
    console.log("routes *");
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  const server = http.createServer(app);
  server.listen(app.get('port'), () => console.log(`Server running on localhost:${app.get('port')}`));
})
