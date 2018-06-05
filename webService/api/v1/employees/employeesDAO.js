let config = require('../../../config');
let logger = require('../../../logger');
let employeeModel = require('./employee.entity');

const insertNewEmployee = function(newEmpDocObj, { upsert }, done) {
    let newDocument = new employeeModel();
    newDocument.name = newEmpDocObj.name;
    newDocument.dob = newEmpDocObj.dob;
    newDocument.department = newEmpDocObj.department;
    newDocument.email = newEmpDocObj.email;
    newDocument.joinedon = Date.now();

    newDocument.save(function(err, result) {
        if (err) {
            logger.error(`Error inserting record to employee, ERROR: ${err}`);
            done(err);
            return;
        }
        logger.debug(`Done inserting record to employee, result: ${result}`);
        done(null, result);
    });
}

module.exports = {
    insertNewEmployee,
}