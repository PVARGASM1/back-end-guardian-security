const User = require('../user/user.model')
const {
	createConsulting
} = require('./consulting.service')


const createConsultingHandler = async (req, res) => {
	try {
		const { userId } = req.params
		const { name, company, email, phone, message, services} = req.body;

		const user = await User.findById(userId)

		// if(!user) {
    //   throw new Error('User not found')
    // };

		const newConsulting = { 
			name,
			company,
			email,
			phone,
			message,
			services, 
			user: userId
		}
		const consulting = await createConsulting(newConsulting);
		user.consultings.unshift(consulting)
		await user.save({validateBeforeSave: false})

    res.status(201).json({ message: 'Consulting created successfully', consulting });

	} catch({ message }) {
    res.status(401).json({ message: 'Consulting could not be created', error: message });
	}
}

// const getAllConsultingHandler = (req, res) => {
//   try {
// 	const {
// 		name, 
// 		company, 
// 		email, 
// 		phone, 
// 		message, 
// 		services
// 	} = req.body;
// 	} catch {

// 	}
// }

module.exports = { 
	createConsultingHandler
}