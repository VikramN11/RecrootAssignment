const express = require("express");
const { UserModel } = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

userRouter.post("/register", async (req, res)=>{
    const {name, email, password} = req.body;
    try {
        bcrypt.hash(password, 5, async(err, hash) =>{
            if(err) res.send({"error" : err.message});
            else{
                const user = new UserModel({name, email, password : hash});
                await user.save();
                res.send({"msg" : "New User has been registered"});
            }
        });
    } catch (error) {
        res.send({"msg":"something went wrong", "error":"error.message"})
    }
    
})

userRouter.post("/login", async (req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await UserModel.find({email});
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result)=> {
                // result == true
                if(result){
                    const token = jwt.sign({userID : user[0]._id}, "recroot")
                    res.send({"msg":"User logged in", "token":token});
                }
                else{
                    res.send({"msg":"Something went wrong"});
                }
            });
            
        }
        else{
            res.send({"msg":"Something went wrong"})
        }
        
    } catch (err) {
        res.send({"error" : err.message});
    }
    
})

module.exports = {userRouter}