const { User } = require('../models');

const userController = {
    //GET all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts reactions',
            select:' -__v'
        })
        .select('-__v');
        .sort({_id: -1})
        .then
    }
}