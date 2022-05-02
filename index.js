const employee = {
    //key : value
    name: 'Sam',
    streetAddress: '11 Broadway'}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newAddress = {...employee};
    newAddress[key] = value;
    return newAddress;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee)
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}