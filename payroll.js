let employeeList = [];

// Event listener for adding an employee
document.getElementById("btnAddEmployee").addEventListener("click", function() {
    addEmployee();
});

// Function to add an employee
function addEmployee() {
    const employeeName = document.getElementById("employee").value;
    const daysWorked = parseFloat(document.getElementById("daysWorked").value);
    const dailyRate = parseFloat(document.getElementById("dayRate").value);
    const deductAmount = parseFloat(document.getElementById("deduct").value);

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductAmount;

    employeeList.push({ employeeName, daysWorked, dailyRate, grossPay, deductAmount, netPay });
    displayEmployees();
}

// Function to display employees in the table
function displayEmployees() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = '';
    employeeList.forEach((emp, index) => {
        tableBody.innerHTML += `
            <tr>
                <td align='right'>${index + 1}</td>
                <td>${emp.employeeName}</td>
                <td align='right'>${emp.daysWorked}</td>
                <td align='right'>${emp.dailyRate}</td>
                <td align='right'>${emp.grossPay}</td>
                <td align='right'>${emp.deductAmount}</td>
                <td align='right'>${emp.netPay}</td>
                <td align='center'>
                    <button type="button" class="btn btn-primary" onclick="editEmployee(${index})">Edit</button>&nbsp;
                    <button type="button" class="btn btn-secondary" onclick="deleteEmployee(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Function to delete a single employee
function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeList.splice(index, 1);
        displayEmployees();
    }
}

// Function to delete all employees
function deleteAllEmployees() {
    if (confirm("Are you sure you want to delete all employees?")) {
        employeeList = [];
        displayEmployees();
    }
}

// Function to edit an employee
function editEmployee(index) {
    const emp = employeeList[index];

    // Populate the input fields with the current employee data for editing
    document.getElementById("employee").value = emp.employeeName;
    document.getElementById("daysWorked").value = emp.daysWorked;
    document.getElementById("dayRate").value = emp.dailyRate;
    document.getElementById("deduct").value = emp.deductAmount;

    // Change the add button to an update button
    const addButton = document.getElementById("btnAddEmployee");
    addButton.textContent = "Update Employee";
    addButton.onclick = function() {
        updateEmployee(index);
    };
}

// Function to update an employee
function updateEmployee(index) {
    const employeeName = document.getElementById("employee").value;
    const daysWorked = parseFloat(document.getElementById("daysWorked").value);
    const dailyRate = parseFloat(document.getElementById("dayRate").value);
    const deductAmount = parseFloat(document.getElementById("deduct").value);

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductAmount;

    // Update the employee data
    employeeList[index] = { employeeName, daysWorked, dailyRate, grossPay, deductAmount, netPay };
    
    // Reset the button and input fields
    document.getElementById("btnAddEmployee").textContent = "Add Employee";
    document.getElementById("btnAddEmployee").onclick = addEmployee;
    document.getElementById("employee").value = '';
    document.getElementById("daysWorked").value = '';
    document.getElementById("dayRate").value = '';
    document.getElementById("deduct").value = '';

    displayEmployees();
}
