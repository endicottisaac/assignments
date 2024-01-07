//Starting empty array of companies employees
const employees = [];

function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status; 
    this.printEmployeeForm = function(){
        console.log('Name: ' + this.name + ',' + ' Job Title: ' + this.jobTitle + ',' + ' Salary: ' + this.salary + ',' + 'Status: ' + status)
    }
}

const employee1 = new Employee('John Smith', 'Sales Manager', '100k/year');
employee1.printEmployeeForm()
employees.push(employee1)

const employee2 = new Employee('Jane Doe', 'CTO', '175k/year');
employee2.printEmployeeForm()
employees.push(employee2)

const employee3 = new Employee('Matt Johnson', 'Data Entry', '16/hour', 'Contractor')
employee3.printEmployeeForm()
employees.push(employee3)

console.log(employees)

