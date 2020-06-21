var mongoose = require("../db");
// 创建关联的数据库模型

var userSchema=new mongoose.Schema({
    username:String,
    age:String,
    sex:String,
    minzu:String,
    card:String,
    phone:String,
    job:String
})
var u=mongoose.model('user',userSchema)
module.exports=u;
