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
        return res.status(200).json({message:'ok'});
    });
});

router.get("/list",function(req,res){
    console.log('ddddd');
    var user_id=1;
    Contacts.findContactByUser(user_id,function(err,contactsList){
        if(err){
            return res.status(200).json(err);
        }
        else
            return res.status(200).json(contactsList);
    });


});

module.exports = router;
