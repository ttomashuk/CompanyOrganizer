var cool = require('cool-ascii-faces');
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const path           = require('path');
const http           = require('http');
const db             = require('./config/db');
const company_routes = require('./server/routes/company_routes');
const app            = express();
const port = 8000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

MongoClient.connect(db.url, (err, database) => {

  if (err) {  console.log("FAILED"); return console.log(err);}
  else console.log("MongoDb connected");
  require('./server/routes')(app, database);

  app.get('/cool', function(request, response) {
    response.send(cool());
  });

  app.get('*', (req, res) => {
    console.log("routes *");
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
  const server = http.createServer(app);
  server.listen(port, () => console.log(`Server running on localhost:${port}`));
})
