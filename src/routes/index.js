const articleRoutes = require('./articles_routes');

module.exports = (app, db) => {
  articleRoutes(app, db);
};
