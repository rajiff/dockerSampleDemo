const async = require('async');
const empService = require('./employees.service');
const messageBroker = require('../../../messageBroker');
const config = require('../../../config');
const logger = require('../../../logger');

const registerNewEmployee = function(newEmpObj, options, done) {
  async.waterfall([
    empService.registerNewEmployee.bind(null, newEmpObj, options),
    function(insertResult, callback) {
      messageBroker.publishToQueue(config.EVENT_QUEUE.NEW_EMP_REGISTERED, insertResult, (err, result) => {
        if(err) {
          logger.error("Error in publishing to queue, ERROR::", err);
        }
        callback(null, insertResult);
      });
    }
  ], done);
}

module.exports = {
  registerNewEmployee,
}