const companyRoutes = require('./company_routes');

module.exports = function(app, db) {
  companyRoutes(app, db);
};
