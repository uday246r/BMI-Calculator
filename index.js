const form = document.querySelector('form');

let count=0;

let tableData = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
    else if (name === '' || !isNaN(name)){
    results.innerHTML = `Please enter a valid name`;
    }
   else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);   // BMI Formula
    // results.innerHTML = `<span>${bmi}</span>`;

    tableData.push({name, height, weight, bmi});
   count++;
   generateTable();
  }
});


function generateTable() {

  const tableContainer = document.querySelector('#table-container');
  tableContainer.innerHTML = ''; 

  const tbl = document.createElement('table');
  tbl.setAttribute("border", "2");
  
 const header = tbl.createTHead();
 const headerRow = header.insertRow(0);

 const headers = ['Name', 'Height(cm)', 'Weight(kg)', 'BMI', 'Action'];
 headers.forEach(text => {

const cell = headerRow.insertCell();
cell.appendChild(document.createTextNode(text));

 });

const tblBody = tbl.createTBody();
tableData.forEach((data, index) => {

  const row = tblBody.insertRow();
  row.insertCell().appendChild(document.createTextNode(data.name));
  row.insertCell().appendChild(document.createTextNode(data.height));
  row.insertCell().appendChild(document.createTextNode(data.weight));
  row.insertCell().appendChild(document.createTextNode(data.bmi));



  const removeButton = document.createElement("i");
  removeButton.className = "fa-solid fa-xmark";
  removeButton.style.marginLeft = "10px"; 
  removeButton.style.cursor = "pointer"; 

  // Add click event to remove the current row
  removeButton.addEventListener("click", function() {
    // Remove the row from the table
    tblBody.removeChild(row);
    // Optionally, remove the data from the tableData array
    tableData.splice(index, 1);
  
});

const actionCell = row.insertCell();
actionCell.appendChild(removeButton);

});

tableContainer.appendChild(tbl);

}






const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
let currentColor = '';

 buttons.forEach(button=>{
    button.addEventListener('click', function(e) {
        const selectedColor = e.target.id;

        if( body.style.backgroundColor === selectedColor ){
            body.style.backgroundColor = '';
            currentColor = '';
        }
        else{
            body.style.backgroundColor = selectedColor;
            currentColor = selectedColor;
        }
    });
});

