/**
 * Created by as on 2017/8/21.
 */
exports.render = function (req, res) {
  //res.send('Hello server Baude');

    if(req.session.lastVisit){
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    res.render('index', {
      title: 'Hello Baude'
    })
};
