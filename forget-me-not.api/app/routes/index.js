const nodeRotes = require('./note_routes');

module.exports = function(app, db) {
    nodeRotes(app, db);
}