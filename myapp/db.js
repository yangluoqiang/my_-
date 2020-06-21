var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/photo-manager',{ useNewUrlParser: true,useUnifiedTopology: true});
module.exports=mongoose