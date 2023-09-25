const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const factor = 12;
  const salt = await bcrypt.genSalt(factor);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

const comparePassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

module.exports = {
  hashPassword,
  comparePassword,
}