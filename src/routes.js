// api
const userRouter = require('./api/user');
const serviceRouter = require('./api/services');
const consultingRouter = require('./api/consulting');


// auth
const localAuthRouter = require('./auth/local');

const routes = (app) => {
  // api
  app.use('/api/users', userRouter);
  app.use('/api/payment', paymentRouter);
  app.use('/api/consulting', consultingRouter);

  // authorization
  app.use('/auth/local', localAuthRouter);
}

module.exports = routes;