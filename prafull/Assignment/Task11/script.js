
function Validation() {
    var Rday = document.getElementById("Rday");
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var dob = document.getElementById("dob");
    var age = document.getElementById("age");
    var mobilenumber = document.getElementById("mobilenumber");
    var address = document.getElementById("address");
    var submitValue = true;

        if(Rday.value===null || Rday.value==""){
            alert("Please select date");
            Rday.focus();
            submitValue = false;
        }
        if(submitValue){
        if (firstname.value === null || firstname.value == "") {
        alert("Please enter the firstname");
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
    if (submitValue) {
        if (lastname.value === null || lastname.value == "") {
            alert("Please enter the lastname");
            lastname.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!lastname.value.match(/^[a-zA-Z\s]*$/)) {
            alert("Please enter characters only");
            lastname.focus();
            lastname.value = "";
            submitValue = false;
        }
    }
    if(submitValue){
        if(dob.value===null || dob.value==""){
            alert("Please select date of birth");
            dob.focus();
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
    // if (submitValue) {
    //     if (getSelectedValue != null) {
    //         submitValue = true;
    //     }
    //     else {
    //         alert("Please select gender");
    //         submitValue = false;
    //     }
    // }
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
            "LastName is           : " + lastname.value + "\n" +
            "\n " +
            "Date of Birth         : " + dob.value + "\n" +
            "\n " +
            "Your Age is           : " + age.value + "\n" +
            "\n " +
            // "Gender is        : " + getSelectedValue.value + "\n" +
            // "\n " +
            "Address is      : " + address.value + "\n" +
            "\n ";
        alert(finalSelection);
    }
     localStorage.setItem('test-item', finalSelection);

     return submitValue;
}
 function addCode() {
     document.getElementById("add_to_me").innerHTML =
         "<h3>" + localStorage.getItem('test-item') + "</h3>";
 }


/***********************************contact page*************************/

function contactValidation(){
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var mobilenumber = document.getElementById("mobilenumber");

    var sumValue = true;


    if(username.value===null||username.value == ""){
      alert("Please enter your fullname");
      username.focus();
      sumValue=false;
    }
    if (sumValue) {
        if (!username.value.match(/^[a-zA-Z\s]*$/)) {
            alert("Please enter characters only");
            username.focus();
            username.value = "";
            sumValue = false;
        }
    }
    if (sumValue) {
        if (mobilenumber.value === null || mobilenumber.value == "") {
            alert("Pleae enter phone number");
            mobilenumber.focus();
            sumValue = false;
        }
    }
    if (sumValue) {
        if (!mobilenumber.value.match(/^[0-9]+$/)) {
            alert("Pleae enter numbers only");
            mobilenumber.focus();
            sumValue = false;
        }
    }
    if (sumValue) {
        if (!mobilenumber.value.match(/^[1-9][0-9]{9}$/)) {
            alert("Phone number must be 10 characters long number and first digit can't be 0!");
            mobilenumber.focus();
            sumValue = false;
        }
    }
    if (sumValue) {
        if (email.value == null || email.value == "") {
            alert("Please enter the email");
            email.focus();
            sumValue = false;
        }
    }
    if (sumValue) {
        if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert("Please enter a valid email!");
            email.focus();
            email.value = "";
            sumValue = false;
        }
    }
    if (sumValue) {
        var finalSelection = " Ok! Thank you I Will Contact With You  \n" +
            "\n " +
            "Name is          : " + username.value + "\n" +
            "\n " +
            "Email Id         : " + email.value + "\n" +
            "\n " +
            "Mobile Number      : " + mobilenumber.value + "\n" +
            "\n ";
        alert(finalSelection);
    }
     localStorage.setItem('test-item', finalSelection);

     return sumValue;
}

function addData() {
    document.getElementById("add_to").innerHTML =
        "<h3>" + localStorage.getItem('test-item') + "</h3>";
}