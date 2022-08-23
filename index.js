/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees){
    return employees.map(createEmployeeRecord)
}

function createTimeInEvent(date){
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(date.split(' ')[1],10),
        date: date.split(' ')[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(date){
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(date.split(' ')[1],10),
        date: date.split(' ')[0]
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(searchDate){
    const parsedSearchDate = searchDate.split(' ')[0]
    const foundIn = this.timeInEvents.find((day) => day.date === parsedSearchDate)
    if(foundIn.date){
        const foundOut = this.timeOutEvents.find((day) => day.date === parsedSearchDate)
        console.log(foundOut.date)
        if(foundOut.date){
            return (foundOut.hour - foundIn.hour)/100
        }
    }
}

function wagesEarnedOnDate(searchDate){
    const hours = hoursWorkedOnDate.call(this, searchDate)
    return hours * this.payPerHour

}

function findEmployeeByFirstName(employees, employee){
    return employees.find((element) => element.firstName === employee)
}

function calculatePayroll(employeeRecords){
    let totalwages = 0
    employeeRecords.forEach((employeeRecord) => {
        const wage = allWagesFor.call(employeeRecord)
        totalwages += wage
    })
    return totalwages
}
