const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
     username : {
                  type : String,
                  unique : [true , "User name already exists . Try different one"],
                  required : [true , "User name is required"]
    },
     email : {
                type : String,
                unique : [true , "Email already exists"],
                required : [true , "Email is required"]
    },
     password : {
                  type : String,
                  required : [true , "Password is required"]
     },
     bio : String ,
     profile_Image : {
                       type : String,
                       default : "https://ik.imagekit.io/9nkskvsdx/default_profile.jpg"
     }
    }
)

const userModel = mongoose.model("users",userSchema);

module.exports = userModel;