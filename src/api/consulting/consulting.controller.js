const User = require('../user/user.model')
const nodemailer = require('nodemailer');
const {
	createConsulting
} = require('./consulting.service')

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'app.guardian2023@gmail.com',
		pass: 'cfcw xfcw mjbf uixt',
	}
})

const createConsultingHandler = async (req, res) => {
	try {
		const { userId } = req.params
		const { name, company, email, phone, message, services} = req.body;

		const user = await User.findById(userId)

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
		await user.save({validateBeforeSave: false});

		const mailOptions = {
			from: 'app.guardian2023@gmail.com',
			to: newConsulting.email,
			subject: `Consultoria registrada ${name} para ${services}`,
			html: `<p>Se ha generado una consultoria de ${name} o ${company}
							contacta a ${email}</p>`
		};

		transporter.sendMail(mailOptions, (error, info) => { 
			if(error){
				console.log("Error to send mail", error);
			}
			else {
				console.log('email sent: ' + info.response);
			}
		})

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