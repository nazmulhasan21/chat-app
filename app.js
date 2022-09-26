// external imports
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const loginRouter = require('./router/loginRouter');
const inboxRouter = require('./router/inboxRouter');
const usersRouter = require('./router/usersRouter');

dotenv.config();

//internal imports
const {
  notFoundHandler,
  errorHandler,
} = require('./middlewares/common/errorHandler');

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('db connection');
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set('view engine', 'ejs');

//set static folder

app.use(express.static(path.join(__dirname, 'public')));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);

// error
//
app.use(notFoundHandler);
// common error handler
app.use(errorHandler);
// listen
app.listen(process.env.PORT || 5000, () =>
  console.log('server connected @ 5000')
);
