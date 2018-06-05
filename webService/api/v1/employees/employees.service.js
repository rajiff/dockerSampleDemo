const async = require('async');
const EmployeesDAO = require('./employeesDAO');
let logger = require('../../../logger');

const registerNewEmployee = function(newEmpObj, options, done) {
  return EmployeesDAO.insertNewEmployee(newEmpObj, options, done);
}

module.exports = {
  registerNewEmployee,
}