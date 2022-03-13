const { Schema, model, Types } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please use a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends : [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

//get user's 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
      (total, friend) => total + friend.length + 1,
      0
    );
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;