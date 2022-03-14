const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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



ThoughtSchema.virtual('reactionCount').get(function() {
return this.reactions.reduce(
    (total, reaction) => total + reaction.length + 1,
    0
);
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;