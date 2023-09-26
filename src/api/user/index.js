const router = require('express').Router();
const { isAuthenticated } = require('../../middlewares/authentication.js');


const {
  getAllUsersHandler,
  getUserByIdHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler
} = require('./user.controller.js');

//api/user
router.route('/').get(getAllUsersHandler);
//api/user/:id
router.route('/:id').get(getUserByIdHandler);
//api/user
router.route('/').post(createUserHandler);
//api/user/:id
router.route('/:id').put(updateUserHandler);
//api/user/:id
router.route('/:id').delete(deleteUserHandler);

module.exports = router;