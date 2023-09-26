// api
const userRouter = require('./api/user');
const consultingRouter = require('./api/consulting');
const paymentRouter = require('./api/payment');


// auth
const localAuthRouter = require('./auth/local');

const routes = (app) => {
  // api
  app.use('/api/user', userRouter);
  app.use('/api/consulting', consultingRouter);
  app.use('/api/payment', paymentRouter);

  // authorization
  app.use('/auth/local', localAuthRouter);
}

module.exports = routes;