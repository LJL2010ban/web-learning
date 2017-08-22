/**
 * Created by as on 2017/8/21.
 */
module.exports = function (app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
}
