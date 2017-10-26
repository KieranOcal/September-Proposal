$(function () {
  var operation = "C"; 
  var tblPersons = localStorage.getItem("tblPersons"); 
  tblPersons = JSON.parse(tblPersons); 
  if (tblPersons === null) 
      tblPersons = [];

  function Create() {
   
    var person = JSON.stringify({
      Name: $("#txtName").val(),
      Course: $("#txtCourse").val(),
      Age: $("#txtAge").val(),
      Number: $("#txtNumber").val(),
      Email: $("#txtEmail").val()
    }); 
    
    tblPersons.push(person);
   
    localStorage.setItem("tblPersons", JSON.stringify(tblPersons));
    alert("Registration form successfully submitted to localstorage!"); 
    return true;
  }

  $("#frmPerson").bind("submit", function () {
    if (operation === "C")
        return Create();
   
  }); 
});

