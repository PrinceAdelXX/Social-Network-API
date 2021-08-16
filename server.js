require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(res => {
  console.log('connected to DB!!!');

  app.use(require('./routes'));

  // Use this to log mongo queries being executed!
  mongoose.set('debug', true);

  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

}).catch(err => {
  console.log('err connecting to DB', err);
});
