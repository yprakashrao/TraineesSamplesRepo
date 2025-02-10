function registrationform() {
      let name = document.getElementById("name").value;
      var submitvalue = true;

      if (name == "" || name == null) {
            alert("please enter name");
            name.focus();
            submitvalue = false;
      }

      if (submitvalue) {
            if (!name.match(/^[a-zA-Z\s]*$/)) {
                  alert("please enter characters only");
                  name.focus();
                  submitvalue = false;
            }
      }

      let age = document.getElementById("age").value;
      if (submitvalue) {
            if (age == null || age == "") {
                  alert("Please enter age");
                  age.focus();
                  submitvalue = false;
            }
      }
      if (submitvalue) {
            if (age < 0 || age >= 110) {
                  alert("Please enter proper age");
                  age.focus();
                  submitvalue = false;
            }
      }

      let gender = document.querySelectorAll('input[name = "gender"]:checked');
      if (submitvalue) {
            if (!gender.length) {
                  alert("Please select gender");
                  gender.focus();
                  submitvalue = false;
            }
      }

      let number = document.getElementById("number").value;
      if (submitvalue) {
            if (number == null || number == "") {
                  alert("Please enter Phone number");
                  number.focus();
                  submitvalue = false;
            }
      }

      if (submitvalue) {
            if (!number.match(/^[0-9\s]*$/)) {
                  alert("Please enter digits only");
                  number.focus();
                  submitvalue = false;
            }
      }

      if (submitvalue) {
            if (!number.match(/^[1-9][0-9]{9}$/)) {
                  alert("Please enter 10 digits only");
                  number.focus();
                  submitvalue = false;
            }
      }


      let date = document.getElementById("date").value;
      if (submitvalue) {
            if (date == "" || date == null) {
                  alert("Please select date");
                  date.focus();
                  submitvalue = false;
            }
      }

      if (submitvalue) {
            enteredData = "Name is" + ":" + name + "\n" +
                  "Age is" + ":" + age + "\n" +
                  "Gender is" + ":" + gender + "\n" +
                  "Phone Number is" + ":" + number + "\n" +
                  "Today Date and Time is" + ":" + date + "\n";
            alert(enteredData);
      }

      // let successmsg = document.getElementById("successmsg");
      if (submitvalue) {
            document.getElementById("name").value = " ";
            document.getElementById("age").value = " ";
            document.querySelectorAll('input[name = "gender"]:checked').length = "";
            document.getElementById("number").value = "";
            document.getElementById("date").value = "";
            document.getElementById("successmsg").innerHTML = "Registration is Successfull.";
      }

}


function retrievedbdata() {
      var retrieve = document.getElementById("retrievetab1");
      //Here creating the ajax object
      var xhttp = new XMLHttpRequest();

      // creating method for object
      xhttp.open("GET", "http://192.168.0.225:8080/AllAppointments");
      // Sending the request for ajax object
      xhttp.send();

      xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && this.status === 200) {
                  var data = xhttp.responseText;
                  var data1 = JSON.parse(data);
                  var tab = ``;

                  for (var i = 0; i < data1.length; i++) {
                        tab += `<tr> <td>${data1[i].firstname}+${data1[i].lastname}</td>
                                           <td>${data1[i].age}</td>
                                           <td>${data1[i].gender}</td>
                                           <td>${data1[i].phonenumber}</td>
                                           <td>${data1[i].date}+"  "+${data1[i].time}</td>
                                      </tr>`;
                  }
                  retrieve.innerHTML = tab;
            }

      }
}

//to retrieve the table from database by ID
function retrievedbdata() {
      var retrieve = document.getElementById("retrievetab1");
      //Here creating the ajax object
      var xhttp = new XMLHttpRequest();

      // creating method for object
      xhttp.open("GET", "http://192.168.0.225:8080/Appointments/12");
      // Sending the request for ajax object
      xhttp.send();

      xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && this.status === 200) {
                  var data = xhttp.responseText;
                  var data1 = JSON.parse(data);
                  var tab = ``;

                  // for (var i = 0; i < data1.length; i++) {
                  tab += `<tr> <td>${data1.firstname}+${data1.lastname}</td>
                                     <td>${data1.age}</td>
                                     <td>${data1.gender}</td>
                                     <td>${data1.phonenumber}</td>
                                     <td>${data1.date}+"  "+${data1.time}</td>
                               </tr>`;
                  // }
                  retrieve.innerHTML = tab;
            }

      }
}
      

//Adding data to the db

function addingUserDataToTable() {
      let payload = {};
      payload['firstname' + 'lastname'] = document.getElementById("name").value;
      payload['age'] = document.getElementById("age").value;
      payload['gender'] = document.querySelectorAll('input[name = "gender"]:checked');
      payload['phonenumber'] = document.getElementById("number").value;
      payload['date'] = document.getElementById("date").value;
      
      fetch("",{
            method:"post",
            headers: {
                  "Content-Type" : "application/json"
            },
            body : JSON.stringify(payload)
      }).then((res) => res.json(1)).then((response) =>{
            setsuccessmessage(response.message);
            document.getElementById("name").value = " ";
            document.getElementById("age").value = " ";
            document.querySelectorAll('input[name = "gender"]:checked').length = "";
            document.getElementById("number").value = "";
            document.getElementById("date").value = "";
            retrievedbdata();
      })
      }
    