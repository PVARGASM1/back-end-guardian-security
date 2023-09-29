const User = require('../user/user.model')
const nodemailer = require('nodemailer');
const {
	createConsulting
} = require('./consulting.service')

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.MAIN_EMAIL,
		pass: process.env.MAIN_EMAIL_PASS,
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

		const styles = {
			container: `
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
			background-color: #fff;
			border-radius: 5px;
			border: 1px solid #e0e0e0;
			`,
			title: `
				text-align: center;
				font-size: 2rem;
				color: #02375A ;
			`,
			paragraph: `
			text-align: center;
			font-size: 18px;
			color: black ;
			`,
		}
 
		const mailOptions = {
			from: 'Guardian Security <app.guardian2023@gmail.com>',
			to: newConsulting.email,
			subject: `Consultoria registrada para ${name}`,
			html:` 
			<div style='${styles.container}'>
				
				<h1 style='${styles.title}'>Tu consultoría en ${services} fue registrada</h1>
				<br />
				<h2 style='${styles.paragraph}'>
					Se ha generado una consultoria para ${name} o ${company} 
					un consultor te contactará para más realizar la
					consultoría personalizada y suministrar más información.
				</h2>
				<br />
				<br />
				<p style='${styles.title}'>Gracias por confíar en nuestros servicios.</p>
				
			</div>
			 `, 
			text: `Bienvenido a Guardian Security App`,
			attachments: [
				{
					filename: 'LogoSinBack.png',
					path: 'src/public/LogoSinBack.png',
				}
			]
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

module.exports = { 
	createConsultingHandler
}