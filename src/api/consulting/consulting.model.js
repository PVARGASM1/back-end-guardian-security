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
			minlength: [10, 'Name must be at least 10 characters long'],
      maxlength: [100, 'Name must be maximum 100 characters long'],
		},
		services: {
			type: String,
			required: true,
		}
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const consulting = model('consulting', consultingSchema);

module.exports = consulting;