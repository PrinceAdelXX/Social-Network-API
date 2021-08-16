const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Please enter a valid email']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ] 
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get total count of friends array 
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

  // create the User model using the userSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;