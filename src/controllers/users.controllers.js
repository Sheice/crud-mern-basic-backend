const userControllers = {

}

const User = require('../models/Users');

userControllers.getUsers = async (req, res)=> {
    const users = await User.find();
    res.json(users);
};
userControllers.postUsers = async (req, res)=> {
    const {username} = req.body;
    const newUser = new User({username: username});
    await newUser.save();
    res.json("new user submitted");
};
userControllers.deleteUsers = async (req, res)=> {
    await User.findByIdAndDelete(req.params.id);
    res.json('user deleted');
};

module.exports = userControllers;