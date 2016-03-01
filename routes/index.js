var express = require('express');
var router = express.Router();
var Contacts=require("../models/contacts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/list/add',function(req,res){
    Contacts.newContact(req.body, function (err, contact) {
        if (err) {
            return res.status(200).json({message:err.message});

        }
        /*res.cookie(configure.auth_cookie_name, user._id, {
            maxAge: 1000 * 60 * 60 *24 * 30,
            signed: true
        });*/
        //req.session.user = user;
        return res.status(200).json({message:'ok'});
    });
    /*var username=req.body.user;
    var password=req.body.password;

    var md5 = crypto.createHash('md5'),
        password = md5.update(password + configure.password_salt).digest('hex');

    User.login(username,password,function(err,user){
        if(err){
            return res.status(200).json({message:err.message});
        }
        if(user && user.password!=password){
            return res.status(200).json({message:"密码错误"});
        }
        else{
            res.cookie(configure.auth_cookie_name, user._id, {
                maxAge: 1000 * 60 * 60 *24 * 30,
                signed: true
            });
            req.session.user = user;
            return res.status(200).json({message:"ok"});
        }
    });*/

});

module.exports = router;
