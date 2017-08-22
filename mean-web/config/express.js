/**
 * Created by as on 2017/8/21.
 */
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    config = require('./config'),
    session = require('express-session');

module.exports = function () {
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    // express-session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // set ejs template
    app.set('views', './app/views'); // 设置视图文件的存储路径
    app.set('view engine', 'ejs'); // 设置ejs作为express应用的模板引擎

    require('../app/routes/index.server.routes')(app);

    // 设置静态文件服务
    app.use(express.static('./public')); // 参数：用于指定静态文件所在的文件夹路径

    return app;
}
