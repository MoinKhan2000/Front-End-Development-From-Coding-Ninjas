const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 }
];
console.log('hiiiiiiiiiiiiiiiiiiiiii');


function increaseSalaries(employees) {
    return employees.map(employee => {
        let salaryIncreasePercentage;
        switch (employee.department) {
            case 'sales':
                salaryIncreasePercentage = 0.10;
                break;
            case 'engineering':
                salaryIncreasePercentage = 0.15;
                break;
            default:
                salaryIncreasePercentage = 0.05;
        }
        const newSalary = employee.salary * (1 + salaryIncreasePercentage);
        return { ...employee, salary: newSalary };
    });
}

let ans = increaseSalaries(employees);
console.log(ans);


