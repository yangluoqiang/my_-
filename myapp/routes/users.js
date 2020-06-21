var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 引入用户数据模块，通过子对像操作数据库
var user=require('../models/user')
//查询所有用户
router.get('/all', function(req, res, next) {
//  user.find({},function(err,data){ res.json(data) })
user.find({},function(err,data){
res.json(data)
})
});
//查询某个用户
router.get('/find', function(req, res, next) {
  //前端传递过来数据
var obj={username:req.query.username}
  user.findOne(obj,function(err,data){
  res.json(data)
  })
  });
module.exports = router;
