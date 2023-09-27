const {
  getUserByEmail,
  getValidateToken,
  updateUser,
} = require('../../api/user/user.service.js');
const { comparePassword } = require('../../utils/bcrypt.js');
const { signToken } = require('../../utils/jwt.js');

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    if (user.isActive === false) {
      return res.status(401).json({ message: 'User is inactivated' });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const payload = {
      id: user._id,
      email: user.email,
    }

    const token = signToken(payload);

    const profile = {
      name: user.name,
      email: user.email,
    }

    res.status(201).json({ message: 'Login successful', token, profile });
  } catch ({ message }) {
    res.status(401).json({ message: 'There has been an error accessing information, try again later', error: message });
  }
}

const activateAccountHandler = async (req, res) => {
  try {
    const { token } = req.params;

    const user = await getValidateToken(token);

    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    if (user.tokenExpires) {
      if (Date.now() > user.tokenExpires.getTime()) {
        return res.status(401).json({ message: 'Token expired' });
      }
    }

    const data = {
      tokenExpires: null,
      validateToken: null,
      isActive: true,
    }

    await updateUser(user._id, data);

    const payload = {
      id: user._id,
      email: user.email
    }

    const userToken = signToken(payload);

    const profile = {
      name: user.name,
      email: user.email,
    }

    res.status(200).json({ message: 'Account activated successfully', token: userToken, profile });
  } catch ({ message }) {
    res.status(401).json({ message: 'Account could not be activated', error: message });
  }
}

module.exports = {
  loginHandler,
  activateAccountHandler,
}