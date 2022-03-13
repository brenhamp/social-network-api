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
      get: cre
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    }
  }
);
