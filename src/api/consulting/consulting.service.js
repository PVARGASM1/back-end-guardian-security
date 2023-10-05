const Consulting = require('../consulting/consulting.model')
const User = require('./user.model.js')

const createConsulting = async (data) => {
    try {
      const consulting = await Consulting.create(data)
      return consulting
    } catch (error) {
      throw new Error(error)
    }
  }

  const getConsutlingByUserId = async () => {
    try {
      const { id } = req.params;

      const consulting = await User.findById(id)
      .populate ({
        path: 'user',
        select: 'name company message services user -_id createdAt updatedAt'
      })

      return consulting;
    } catch (error) {
      throw new Error(error);
    }
  }

module.exports = {
	createConsulting,
  getConsutlingByUserId,
}