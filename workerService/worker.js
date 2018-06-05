const async = require('async');
const logger = require('./logger');

const doWork = function(newEmpObj, done) {
  logger.debug("Got employee to process ", newEmpObj);

  if (!newEmpObj) {
    done({ error: "Invalid data, cannot process further..!" });
    return;
  }

  async.waterfall([
  	addToPayRoll.bind(null, newEmpObj),
  	enableThis,
  	enableThat
  ], (err, result) => {
    if (err)
      logger.debug("Error in processing, ERROR::[", err, "] RESULT::[", result, "]");
    else
      logger.debug("Processing done for", newEmpObj);

    done(err, result);
  })
}

function addToPayRoll(empObj, next) { next(null, empObj); }
function enableThis(empObj, next) { next(null, empObj); }
function enableThat(empObj, next) { next(null, empObj); }

module.exports = doWork;