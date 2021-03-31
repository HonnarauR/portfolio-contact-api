const mongoose=require('mongoose');

const contactSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type :String,
        required : true
    },
    email : {
        type:String,
        required : true,
        unique : true
        // match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    work:{
        type:String,
        required:true
    },
    message:{
        type:String,
        default:"Nothing"
    },
    time:{
        type:String
    }
});

module.exports = mongoose.model("Contact",contactSchema);