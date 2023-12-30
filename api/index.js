const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

const app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

const salt = bcrypt.genSaltSync(10);
const secret = "wbi2uebfo2ueb2nfe972u0102";

mongoose.connect("mongodb+srv://aabhaskrjha:D6CjCykhd5zEhc4c@cluster0.lacg4xy.mongodb.net/?retryWrites=true&w=majority");

app.post("/register", async(req, res) =>{
    const {email, password} = req.body;
    try {
        const userDoc = await User.create({
            email,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }    
    
});

app.post("/login", async(req, res) =>{
    const {email, password} = req.body;
    const userDoc = await User.findOne({email});
    try {
        const passOK = bcrypt.compareSync(password, userDoc.password);
        if (passOK){
            // logged in
            jwt.sign({email, id:userDoc._id}, secret, {}, (err, token) =>{
                if (err) throw err;
                res.cookie("token", token).json({
                    id: userDoc._id, email, 
                });
            })
        } else{
            res.status(400).json("Wrong Credentials");
        }
    } catch (error) {
        res.status(400).json("Wrong Credentials");
    }
    
});

app.get("/profile", (req, res) =>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if (err) throw err;
        res.json(info);
    })
});

app.post("/logout", (req, res) =>{
    res.cookie('token', '').json('ok');
});


app.listen(8000);

//username aabhaskrjha
//pwd D6CjCykhd5zEhc4c
