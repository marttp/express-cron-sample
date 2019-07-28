const express = require('express');
const app = express();

const config = require('./config');
const { PORT } = config;

require('./cron-jobs.js');

app.get('/', (req, res) => {
  console.log('Run task by request');

  res.status(200).json({
    message: 'Server response message'
  });
});

app.listen(PORT, () => {
  console.log(`Server start on port: ${PORT}`);
});
