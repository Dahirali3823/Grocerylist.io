document.getElementById("groceryForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form submission

    const itemName = document.getElementById("item").value;
    const itemCategory = document.getElementById("category").value;

    if (itemName === "") {
        alert("Please enter item name.");
        return;
    }

    const table = document.getElementById("table");

    // Create a new row
    const newRow = table.insertRow(-1);

    // Create checkbox cell
    const checkboxCell = newRow.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);

    // Create item name cell
    const itemCell = newRow.insertCell(1);
    itemCell.textContent = itemName;

    // Create category cell
    const categoryCell = newRow.insertCell(2);
    categoryCell.textContent = itemCategory;

    // Create actions cell
    const actionsCell = newRow.insertCell(3);
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-warning", "btn-sm", "btn-edit"); 
    editButton.addEventListener("click", function () {
        editItem(newRow);
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm", "btn-edit"); 
    deleteButton.addEventListener("click", function () {
        deleteItem(newRow);
    });
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    // Clear input fields after submission
    document.getElementById("item").value = "";
    document.getElementById("category").value = "Dairy";
});

function editItem(row) {
    const itemName = row.cells[1].textContent;
    const itemCategory = row.cells[2].textContent;

    document.getElementById("item").value = itemName;
    document.getElementById("category").value = itemCategory;

    row.remove();
}

function deleteItem(row) {
    row.remove();
}