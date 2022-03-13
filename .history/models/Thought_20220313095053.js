const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  }
);

const ReactionSchema = new Schema(
    {
          reactionId: {
          type: Schema.Types.ObjectId,
          default: () => new Types.ObjectId()
          },
          reactionBody: {
          type: String,
          required: true,
          maxLength: 280
          },
          username: {
          type: String,
          required: true
          },
          createdAt: {
              type: Date,
              default: Date.now,
              get: createdAtVal => dateFormat(createdAtVal)
          }
      }
  );

  UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(
      (total, friend) => total + friend.length + 1,
      0
    );
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;