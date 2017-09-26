const express = require('express');
const router = express.Router();
const COLLECTION_NAME = 'companies'

module.exports = function(app, db) {
  var ObjectID = require('mongodb').ObjectID;

  router.get('/companies', (req, res) => {
    db.collection(COLLECTION_NAME).find({}).toArray(function(err, collection){
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(collection);
      }
    });
  });

  router.get('/company/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection(COLLECTION_NAME).findOne( details , (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  router.post('/company', (req, res) => {
    if(req.body.parent) {
      db.collection(COLLECTION_NAME).findOne( { _id: new ObjectID(req.body.parent) }, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          var resp = JSON.parse(JSON.stringify(result));
          var path = "";
          if(resp.path == null) path = req.body.parent+",";
          else path = resp.path+req.body.parent+",";
          insertCompany(req ,res, path);
        }
      });
    } else {
      insertCompany(req ,res, null);
    }

    function insertCompany(req ,res, path) {
      const data = { name: req.body.name, earnings: req.body.earnings, path: path };
      db.collection(COLLECTION_NAME).insert(data, (err, result) => {
        if (err) {
          res.send({ 'error': 'An error has occurred' });
        } else {
          res.send(result.ops[0]);
        }
      });
    }

  });

  router.put ('/company/:id', (req, res) => {
      const id = req.params.id;
      const filter = { '_id': new ObjectID(id) };
      const data = { $set: { "name" : req.body.name, "earnings" : req.body.earnings}};
      db.collection(COLLECTION_NAME).updateOne(filter, data , (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
        } else {
            res.send({ "name" : req.body.name, "earnings" : req.body.earnings, _id:id});
        }
      });
    });

  router.delete('/company/:id', (req, res) => {
      const id = req.params.id;
      const details = {$or: [{ "path": { $regex: id }},{"_id": new ObjectID(id)}] };
      db.collection(COLLECTION_NAME).remove(details, (err, item) => {
        if (err) {
          res.send({'error':'An error has occurred'});
        } else {
          res.send(item);
        }
      });
    });


  app.use('/api', router);
};
