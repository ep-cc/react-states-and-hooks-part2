const express = require('express');
const mongoose = require('mongoose');
const UserModel = require('./db/user.model');


const app = express();
const port = 5000;

function logger (req, res, next) {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.url}`);
  next();
}
app.use(logger);

mongoose.connect('mongodb://localhost:27017/react-hooks-ws')
  .then(con => console.log(`Connected to MongoDB ${con.connection.name}`));

app.get('/api/users', async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`User backend is listening on port ${port}`)
});
