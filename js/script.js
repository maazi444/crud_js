var selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData(){
    var formData = {};
    formData["countryName"] = document.querySelector("#countryName").value;
    formData["capitalName"] = document.querySelector("#capitalName").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.querySelector("#listTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.countryName;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.capitalName;

    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<button class="btn btn-info" onclick="onEdit(this)">Edit</button>
                        <button class="btn btn-danger" onclick="onDelete(this)">Delete</button>`;
}

function resetForm(){
    document.querySelector("#countryName").value = "";
    document.querySelector("#capitalName").value = "";
    selectedRow = null;
}

function onEdit(editbtn){
	
    selectedRow = editbtn.parentElement.parentElement;
    document.querySelector("#countryName").value = selectedRow.cells[0].innerHTML;
    document.querySelector("#capitalName").value = selectedRow.cells[1].innerHTML;
    document.querySelector("#subbtn").value="Update";

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.countryName;
    selectedRow.cells[1].innerHTML = formData.capitalName;
    document.querySelector("#subbtn").value="Submit";
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.querySelector("#listTable").deleteRow(row.rowIndex);
    resetForm();
}