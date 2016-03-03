var mongoose = require('mongoose');

var Schema=mongoose.Schema;
var ObjectId  = Schema.ObjectId;
var ContactsSchema=new Schema({
    user_id:{type:Number},
    lastName:{type:String},
    firstName:{type:String},
    qq:{type:Number},
    address:{type:String},
    phone:{type:Number},
    remark:{type:String},
});

var Contacts=mongoose.model("contacts",ContactsSchema);


exports.newContact=function(data,callback){
    Contacts.find({ phone: data.phone }, function (err, contact) {
        if (contact.length > 0) {
            err = {};
            err.message = '该账号已被注册！';
            return callback(err, contact);
        }
        // 没被注册
        var contact = new Contacts();

        contact.user_id=data.user_id;
        contact.lastName=data.lastName;
        contact.firstName=data.firstName;
        contact.qq=data.qq;
        contact.address=data.address;
        contact.phone=data.phone;
        contact.remark=data.remark;
        contact.save(callback);
    });
};


exports.findContactByUser=function(user_id,callbck){
    Contacts.find({user_id:user_id},function(err,contactsList){
        if(err){
            return callbck(err);
        }

        return callbck(err,contactsList);
    });
};
