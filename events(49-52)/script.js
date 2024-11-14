/* Q1. Create a signup form and display form data in your web 
page on submission. */





function formValidate(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  document.getElementById("formData").innerHTML = `
            <h3>Form Data Submitted:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${password}</p>`;
};






/* Q2. Suppose in your webpage there is content area in which 
you have entered your item details, but user can only see 
some details on first look. When user clicks on “Read 
more” button, full detail of that particular item will be 
displayed. */







function expandPara() {
  var completePara =
    "Fruits are a vital part of a healthy diet because they are a natural source of many essential nutrients and antioxidants: Vitamins and mineralsFruits are a great source of vitamin C, potassium, and folic acid. Vitamin C helps repair and grow body tissues, while potassium helps maintain healthy blood pressure. Folic acid is important for the body to form red blood cells, especially during pregnancy. Fiber: All fruits contain dietary fiber, which helps reduce cholesterol and the risk of heart disease and bowel cancer. Fiber also helps maintain a healthy gut and prevent constipation. AntioxidantsFruits contain a wide range of antioxidants, including flavonoids, that can help boost health. Phytochemicals: Fruits like strawberries, blueberries, cranberries, and citrus contain phytochemicals that may have additional health benefits. Health experts recommend eating at least five pieces of fruit or vegetables per day. The USDA's MyPlate recommends filling half of your plate with fruits and vegetables at mealtimes. ";

  document.getElementById("item_detail").innerText = completePara;
}

/* Q3. In previous assignment you have created a tabular data 
using javascript. Let’s modify that. Create a form which 
takes student’s details and show each student detail in 
table. Each row of table must contain a delete button and 
an edit button. On click on delete button entire row should 
be deleted. On click on edit button, a hidden form will 
appear with the values of that row. */




function addStudent(event){
  event.preventDefault();
  
  var studId = document.getElementById("studId").value;
  var studName = document.getElementById("studName").value;
  var studClass = document.getElementById("studClass").value;


  var studTable = document.querySelector(".student_database table");

  var row = document.createElement("tr");

  row.innerHTML = `
  <td> ${studId} </td>
  <td> ${studName} </td>
  <td> ${studClass} </td>
  <td> 
    <button onclick="deleteRow(this)">Delete</button>
    <button onclick="editRow(this)">Edit</button>
  </td>
  `;

  studTable.appendChild(row);

  document.getElementById("student_form").reset();

}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
