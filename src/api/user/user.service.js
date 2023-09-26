const User = require('./user.model');

const getAllUsers = async () => {
  try {
    const users = await User.find()
      .select('name email')
      // .populate({
      //   path: 'consulting',
      // });
    return users;
  } catch (error) {
    throw new Error(error);
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);

    return user;
  } catch (error) {
    throw new Error(error);
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });

    return user;
  } catch (error) {
    throw new Error(error);
  }
}

const getValidateToken = async (token) => {
  try {
    const user = await User.findOne({ validateToken: token });

    return user;
  } catch (error) {
    throw new Error(error);
  }
}

const createUser = async (data) => {
  try {
    const user = await User.create(data);

    return user;
  } catch (error) {
    throw new Error(error);
  }
}

const updateUser = async (id, data) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
}

const deleteUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  getValidateToken,
  createUser,
  updateUser,
  deleteUser
}