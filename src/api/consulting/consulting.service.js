const Consulting = require('../consulting/consulting.model')
const User = require('../user/user.model')

const createConsulting = async (data) => {
    try {
      const consulting = await Consulting.create(data)
      return consulting
    } catch (error) {
      throw new Error(error)
    }
  }

module.exports = {
	createConsulting,
}