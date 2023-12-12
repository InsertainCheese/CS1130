let payrollList = [];

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function addEmployee() {
    const employeeName = document.getElementById("employeeName").value;
    const daysWorked = parseFloat(document.getElementById("daysWorked").value);
    const dailyRate = parseFloat(document.getElementById("dailyRate").value);
    const deductionAmount = parseFloat(document.getElementById("deductionAmount").value);

    if (isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount) || employeeName.trim() === "") {
        alert("Please enter valid values for all fields.");
        closeModal("confirmationModal");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    const employee = {
        employeeName,
        daysWorked,
        dailyRate,
        grossPay,
        deductionAmount,
        netPay
    };

    payrollList.push(employee);

    updateTable();
    closeModal("confirmationModal");
    clearInputs();
}

function updateTable() {
    const tableBody = document.getElementById("payrollTableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < payrollList.length; i++) {
        const row = tableBody.insertRow();
        const cellNo = row.insertCell(0);
        const cellEmployeeName = row.insertCell(1);
        const cellDaysWorked = row.insertCell(2);
        const cellDailyRate = row.insertCell(3);
        const cellGrossPay = row.insertCell(4);
        const cellDeductionAmount = row.insertCell(5);
        const cellNetPay = row.insertCell(6);
        const cellAction = row.insertCell(7);

        cellNo.textContent = i + 1;
        cellEmployeeName.textContent = payrollList[i].employeeName;
        cellDaysWorked.textContent = payrollList[i].daysWorked;
        cellDailyRate.textContent = payrollList[i].dailyRate;
        cellGrossPay.textContent = payrollList[i].grossPay.toFixed(2);
        cellDeductionAmount.textContent = payrollList[i].deductionAmount.toFixed(2);
        cellNetPay.textContent = payrollList[i].netPay.toFixed(2);

        // Add delete button with confirmation
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            showDeleteConfirmationModal(i);
        };

        cellAction.appendChild(deleteButton);
    }
}

function clearInputs() {
    document.getElementById("employeeName").value = "";
    document.getElementById("daysWorked").value = "";
    document.getElementById("dailyRate").value = "";
    document.getElementById("deductionAmount").value = "";
}

function showDeleteConfirmationModal(index) {
    const deleteModal = document.getElementById("deleteConfirmationModal");
    const deleteButton = document.getElementById("deleteButton");

    deleteButton.onclick = function () {
        deleteEmployee(index);
        closeModal("deleteConfirmationModal");
    };

    showModal("deleteConfirmationModal");
}

function deleteEmployee(index) {
    payrollList.splice(index, 1);
    updateTable();
}

function clearTable() {
    const clearModal = document.getElementById("clearConfirmationModal");
    const clearButton = document.getElementById("clearButton");

    clearButton.onclick = function () {
        clearPayrollList();
        closeModal("clearConfirmationModal");
    };

    showModal("clearConfirmationModal");
}

function clearPayrollList() {
    payrollList = [];
    updateTable();
}

function goBack() {
    window.location.href = 'index.html';
}
