const router = require('express').Router();
const empCtrl = require('./employees.controller');
const logger = require('../../../logger');

/**
 *
 * Register a new Employee
 *
 *
 */
router.post('/', function(req, res) {
  try {
    let newEmpObj = req.body;

    if(!newEmpObj) {
      res.status(400).send({ error: 'Invalid request data..!' });
      return;
    }

    let options = { upsert: true };
    empCtrl.registerNewEmployee(newEmpObj, options, function(err, result) {
      if (err) {
        logger.error('Error in inserting employee, ERROR::', err);
        res.status(400).send({ error: 'Something went wrong, please check and try again..!' });
        return;
      }
      res.status(201).send(result);
      return;
    })
  } catch (err) {
    logger.error('Unexpected error in inserting employee, ERROR::', err);
    res.status(500).send({ error: 'Unexpected internal error, please try later..!' });
    return;
  }
});

module.exports = router;