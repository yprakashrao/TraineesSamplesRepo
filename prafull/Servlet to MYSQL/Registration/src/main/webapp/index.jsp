<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Patient Registration</title>
</head>
<style>
#booktask {
	border-radius: 30px;
	border: 2px solid black;
	margin-left: 350px;
	margin-right: 350px;
	background-color: whitesmoke;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#booktask {
	border-radius: 45px;
}

.form form lable{
        
}

.form {
	background-color: aquamarine;
	border-radius: 45px;
	margin-left: 300px;
	margin-right: 300px;
	margin-top: 20px;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

#booktask img {
	width: 85px;
	height: 85px;
	border-radius: 25px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding-top: 10px;
}

.form h1 {
	text-align: center;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
		sans-serif;
	color: red;
	height: 50px;
}

.OD input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.OD {
	text-align: center;
}

.firstname {
	margin-top: 20px;
	text-align: center;
	margin-right: 5px;
}

.firstname input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.lastname {
	margin-top: 20px;
	text-align: center;
}

.lastname input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.dob {
	margin-top: 20px;
	text-align: center;
}

.dob input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.age {
	margin-top: 20px;
	text-align: center;
	margin-right: 55px;
}

.age input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.mo {
	margin-top: 20px;
	text-align: center;
}

.mo input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

#gender input {
	margin-left: 5px;
}

.Bg {
	margin-top: 20px;
	text-align: center;
	margin-right: 110px;
}

.add {
	margin-top: 20px;
	text-align: center;
	margin-left: 20px;
}

.add input {
	width: 300px;
	height: 35px;
	border-radius: 10px;
}

.btn input {
	background-color: green;
	border-radius: 20px;
	width: 90px;
	height: 35px;
	border: none;
}

.btn {
	text-align: center;
	margin-top: 30px;
}

.btn .submit {
	color: whitesmoke;
	cursor: pointer;
}

#add_to {
	background-color: whitesmoke;
	border: none;
	font-family: Georgia, 'Times New Roman', Times, serif;
}

.contact {
	background-color: rgb(250, 197, 97);
	border-radius: 50px;
	margin-left: 400px;
	margin-right: 400px;
	margin-top: 25px;
	margin-bottom: 50px;
	text-align: center;
	box-shadow: 1px 1px 2px 7px;
}

.contact h1 {
	margin-top: 20px;
	font-family: cursive;
}

.contact input {
	width: 250px;
	height: 25px;
	border-radius: 10px;
}

.buton input {
	color: whitesmoke;
	background-color: limegreen;
	height: 30px;
	width: 100px;
	margin-top: 20px;
	border: none;
	margin-bottom: 10px;
}
</style>
<body>
	<div class="form">
		<h1>Patient Registration</h1>
		<form name="registration" action="insert" id="Pform"
			class="registartion-form" onsubmit="return Validation()" method="post">
			<div class="OD">
				&nbsp;<label> App Date: <input type="date" id="Rday"
					name="Rday" pattern="\d{4}-\d{2}-\d{2}" /> <span class="validity"></span>
				</label>
			</div>
			<div class="firstname">
				<label for="name">Enter Name:</label> <input type="text"
					name="firstname" placeholder="Enter your name" id="firstname">
			</div>
			<div class="age">
				&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <label
					for="age">Enter Age:</label> <input type="text" name="age"
					placeholder="Enter your Age" id="age">
			</div>
			<div class="mo">
				<label for="mobilenumber">Mobile No:</label> <input type="text"
					name="mobilenumber" placeholder="Enter your Phone number"
					id="mobilenumber" />
			</div>
			<div class="Bg" id="gender">
				&nbsp;<label for="gender">Gender:</label> <input type="radio"
					name="gender" value="male"> Male <input type="radio"
					name="gender" value="female"> Female <input type="radio"
					name="gender" value="other"> Other
			</div>
			<div class="add">
				<label>Address:</label> <input name="address" id="address"
					placeholder="write your address">
			</div>
			<div class="btn">
				<input type="submit" class="submit" value="submit" />
			</div>
		</form>
	</div>


<script>


function Validation() {
    var Rday = document.getElementById("Rday");
    var firstname = document.getElementById("firstname");
    var age = document.getElementById("age");
    var mobilenumber = document.getElementById("mobilenumber");
    var gender =  document.getElementById("gender");
    var address = document.getElementById("address");
    var submitValue = true;
    
    if(Rday.value===null || Rday.value==""){
        alert("Please select date");
        Rday.focus();
        submitValue = false;
    }
    if(submitValue){
    if (firstname.value === null || firstname.value == "") {
    alert("Please enter the Name");
    firstname.focus();
    submitValue = false;
}
}
    if (submitValue) {
        if (!firstname.value.match(/^[a-zA-Z\s]*$/)) {
            alert("Please enter characters only");
            firstname.focus();
            firstname.value = "";
            submitValue = false;
        }
    }
    
    
    if(submitValue){
        if(age.value===null || age.value==""){
            alert("Please Enter your age");
            age.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!age.value.match(/^[0-9]+$/)) {
            alert("Pleae enter numbers only");
            age.focus();
            submitValue = false;
        }
    }
    
    
    
    if (submitValue) {
        if (mobilenumber.value === null || mobilenumber.value == "") {
            alert("Pleae enter phone number");
            mobilenumber.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!mobilenumber.value.match(/^[0-9]+$/)) {
            alert("Pleae enter numbers only");
            mobilenumber.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!mobilenumber.value.match(/^[1-9][0-9]{9}$/)) {
            alert("Phone number must be 10 characters long number and first digit can't be 0!");
            mobilenumber.focus();
            submitValue = false;
        }
    }
    
    
    
    if (submitValue) {
             if (getSelectedValue != null) {
                 submitValue = true;
             }
             else {
                alert("Please select gender");
                submitValue = false;
             }
         }
    
    
    
    if (submitValue) {
        if (address.value === "" || address.value===undefined) {
            alert("Please enter address")
            submitValue = false;
            address.focus();
        }
    }
    
    
    
    if (submitValue) {
        var finalSelection = " Entered Values are  \n" +
            "\n " +
            "Opointment Date is    : " + Rday.value + "\n" +
            "\n " +
            "FirstName is          : " + firstname.value + "\n" +
            "\n " +
            "Your Age is           : " + age.value + "\n" +
            "\n " +
            "Gender is        : " + getSelectedValue.value + "\n" +
            "\n " +
            "Address is      : " + address.value + "\n" +
            "\n ";
        alert(finalSelection);
    }
     localStorage.setItem('test-item', finalSelection);

     return submitValue;
}df
</script>
</body>
</html>