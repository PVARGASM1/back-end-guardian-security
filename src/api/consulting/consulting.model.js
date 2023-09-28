const { Schema, model } = require('mongoose');

const consultingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      minlength: [5, 'Name must be at least 5 characters long'],
      maxlength: [10, 'Name must be maximum 10 characters long'],
    },
		menssage: {
			type: String,
			minlength: [1, 'Name must be at least 1 characters long'],
      maxlength: [100, 'Name must be maximum 100 characters long'],
		},
		services: {
			type: String,
			required: true,
		},
    user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Consulting = model('consulting', consultingSchema);

module.exports = Consulting;