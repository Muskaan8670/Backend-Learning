const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

 async function registerController( req,res){
    const { username, email, password, bio, profile_Image} = req.body;

    // const isUserExistByEmail = await userModel.findOne({email});

    // if(isUserExistByEmail){
    //    return res.status(409).json({
    //     message : "User already exists with same email"
    //    })
    // }

    // const isUserExistByUsername = await userModel.findOne({username});

    // if(isUserExistByUsername){
    //     return res.status(409).json({
    //         message : "User existed with same username"
    //     })
    // }

    const isUserExists = await userModel.findOne({
        $or:[{email},{username}]
    })

    if(isUserExists){
        return res.status(409).json({
            message : "User already exists" + (isUserExists.email === email ? "Email already exists" : "Username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const user = userModel.create({
        username,
        email,
        bio,
        profile_Image,
        password : hash
    })

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn: "1d"})

    res.cookie("token", token);

    res.status(201).json({
        message : "User registered successfully",
        user: {
            email : (await user).email,
            username : (await user).username,
            bio : (await user).bio,
            profile_Image : (await user).profile_Image
        }
    })
}

 async function loginController (req,res){
    const {username, email, password} = req.body;

    const user = await userModel.findOne({

        $or: [
            {
                username : username
            },
            {
                email : email
            }
        ]
    })

    if(!user){
        res.status(404).json({
            message : "User not found"
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');

    const isPasswordValid = hash === user.password

    if(!isPasswordValid){
        res.status(401).json({
            message : "Password Invalid"
        })
    }

    const token = jwt.sign(
        {id : user._id},
         process.env.JWT_SECRET,
        {expiresIn : "1d"})
    
    res.cookie("token", token);

    res.status(200).json({
        message : "User logged In successfully.",
        user : {
            user : user.username,
            email : user.email,
            bio : user.bio,
            profile_Image : user.profile_Image
        }
    })
}

module.exports = {
    registerController,
    loginController
}