const config = require('./config');
const { JOB_SCHEDULE } = config;
const cron = require('node-cron');

cron.schedule(JOB_SCHEDULE, () => {
  console.log('Run task every minute');
});
