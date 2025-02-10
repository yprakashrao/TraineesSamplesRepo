function formValidation() {

      var Name = document.getElementById("name");
      var submitvalue = true;

      //Name validation with character
      if (Name.value == null || Name.value == "") {
            alert("please enter Name");
            Name.focus();
            submitvalue = false;
      }
      if (submitvalue) {
            if (!Name.value.match(/^[a-zA-Z\s]*$/)) {
                  alert("please enter characters");
                  Name.focus();
                  submitvalue = false;
            }
      }

      //mail validation
      var mail = document.getElementById("email");
      if (submitvalue) {
            if (mail.value == null || mail.value == "") {
                  alert("please enter Email");
                  mail.focus();
                  submitvalue = false;
            }
      }
      if (submitvalue) {
            if (!mail.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
                  alert("Please enter valid Email");
                  mail.focus();
                  submitvalue = false;
            }
      }

      //phonenumber validations
      var phonenumber = document.getElementById("pnumber");
      if (submitvalue) {
            if (phonenumber.value == null || phonenumber.value == "") {
                  alert("Enter phonenumber");
                  phonenumber.focus();
                  submitvalue = false;
            }
      }
      if (submitvalue) {
            if (!phonenumber.value.match(/^[0-9]*$/)) {
                  alert("please enter numerics");
                  phonenumber.focus();
                  submitvalue = false;
            }
      }

      // Gender validation
      var gender = document.querySelectorAll('input[name="gender"]:checked');
      if (submitvalue) {
            if (!gender.length) {
                  alert("please select a gender");
                  submitvalue = false;
            }
      }

      // storing values in local 
      if (submitvalue) {
            var finalformdata =
                  " Name is: " + Name.value + "\n" +
                  "Email is: " + mail.value + "\n" +
                  "phone number is:" + phonenumber.value + "\n" +
                  "Gender: " + gender.length + "\n";
            alert(finalformdata);
      }
      console.log(finalformdata);
      var table = document.getElementById("mytable");
      var row = table.insertRow(-1);
      var name = row.insertCell(0);
      var email = row.insertCell(1);
      var pnumber = row.insertCell(2);
      var gender = row.insertCell(3);
      var Delete = row.insertCell(4);
      var Edit = row.insertCell(5);

      name.innerHTML = document.getElementById("name").value;
      email.innerHTML = document.getElementById("email").value;
      pnumber.innerHTML = document.getElementById("pnumber").value;
      gender.innerHTML = document.querySelectorAll('input[name="gender"]:checked').length;
      Delete.innerHTML = "<input type='button' value='Delete' onclick='deleteRow(this);'>"
      Edit.innerHTML = "<input type='button' value='Edit' onclick='myeditfunction(this);'>"

      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("pnumber").value="";

}
function deleteRow(r) {
      var i = r.parentNode.parentNode.rowIndex;
      document.getElementById("mytable").deleteRow(i);
}
function myeditfunction(r) {
      var myTab = document.getElementById('mytable');
      var i = r.parentNode.parentNode.rowIndex;
      var objCells = myTab.rows.item(i).cells;
      for (var j = 0; j < objCells.length; j++) {
            if(j==0){
                  document.getElementById("name").value= objCells.item(j).innerHTML;
            }
        }
}















