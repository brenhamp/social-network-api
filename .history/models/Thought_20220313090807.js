const { Schema, model, Types } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength:
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, 'Please use a valid email address'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please use a valid email address']
    },
    writtenBy: {
      type: String,
      required: true,
      trim: true
    }
  }
);
