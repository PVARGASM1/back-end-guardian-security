const { Schema, model, models } = require('mongoose');

const emailRegex = new RegExp('[a-zA-Z0-9]{5,10}@[a-z]{3,10}.com')

const userSchema = new Schema(
  {
    // id: {
    //   type: Schema.Types.ObjectId
    // },
    name: {
      type: String,
      required: [true, 'User must have a name'],
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [20, 'Name must be maximum 20 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [emailRegex, 'Email is not valid'],
      validate: [{
        validator: async (value) => {
          try {
            const user = await models.user.findOne({ email: value });
            return !user;
          } catch (error) {
            return false;
          }
        },
        message: 'Email already exists',
      }],
    },
    password: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      minlength: [5, 'Name must be at least 5 characters long'],
      maxlength: [10, 'Name must be maximum 10 characters long'],
    },
    address: {
      type: String,
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [10, 'Name must be maximum 10 characters long'],
    },
    consultings: {
      type: [{
        type: Schema.Types.ObjectId,
        ref: 'Consulting',
      }],
        required: false,
    },
    validateToken: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = model('user', userSchema);

module.exports = User;