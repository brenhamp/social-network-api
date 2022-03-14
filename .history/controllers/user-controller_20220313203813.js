const { User, Thought } = require('../models');

const userController = {

    //GET all users
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts', select: '-__v'
        })
        .populate({
            path: 'friends', select: '-'
        })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //GET one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select:'-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //POST new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //PUT update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate
        ({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    //DELETE user by id

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        // Thought.findByIdAndDelete({_id: params.id})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    //add friends
    addFriend({ params, body }, res) {
        User.findOneAndUpdate (
            { _id: params.id },
            { $addToSet: { friends: body.friendsId } },
            { new: true }
            )
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    //delete friends
    deleteFriend({ params, body }, res) {
        User.findOneAndUpdate (
            { _id: params.id },
            { $pull: { friends: body.friendsId } },
            { new: true }
            )
            .then((dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData)
            }))
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;