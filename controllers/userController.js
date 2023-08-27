const User = require("../models/userModel");

const getAllUsers = async(req, res)=> {
    const users = await User.find({})
    res.json({
        status: true,
        users,
    })
}

const createUser = async (req, res)=>{

    const { name, email, password } = req.body;

    let user = await User.find({email})

    if(user?.length !== 0){
        console.log(user);
        return res.json({
            status: true,
            message: 'already exist'
        })
    }

    user = await User.create({
        name,
        email,
        password,
    })

    res.status(201).json({
        status: true,
        message: "Registered"
    })
}

const getUserById = async (req, res)=>{
    console.log(req.params);

    const { id } = req.params;
    const user = await User.findById(id);

    res.json({
        status: true,
        user
    })
}

module.exports = { getAllUsers, createUser, getUserById };