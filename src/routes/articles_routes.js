const ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {
  app.get('/articles/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    db.collection('articles').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/articles', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };
    db.collection('articles').insert(note, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  app.delete('/articles/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  app.put ('/articles/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(note);
      }
    });
  });
};
