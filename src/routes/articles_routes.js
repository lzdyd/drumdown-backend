module.exports = (app, db) => {
  app.post('/articles', (req, res) => {
    console.log(req.body);
    res.send('Hello');
  });
};
