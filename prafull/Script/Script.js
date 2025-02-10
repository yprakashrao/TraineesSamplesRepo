function Validation() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var mobilenumber = document.getElementById("mobilenumber");
    var getSelectedValue = document.querySelector('input[name="gender"]:checked');
    var state = document.getElementById("state");
    var getSelectedInterest = document.querySelectorAll('input[name="interest"]:checked');
    var comments = document.getElementById("comments");
    var submitValue = true;

    if (username.value === null || username.value == "") {
        alert("Please enter the name");
        username.focus();
        submitValue = false;
    }
    if (submitValue) {
        if (!username.value.match(/^[a-zA-Z\s]*$/)) {
            alert("Please enter characters only");
            username.focus();
            username.value = "";
            submitValue = false;
        }
    }
    if (submitValue) {
        if (email.value == null || email.value == "") {
            alert("Please enter the email");
            email.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            alert("Please enter a valid email!");
            email.focus();
            email.value = "";
            submitValue = false;
        }
    }
    if (submitValue) {
        if (mobilenumber.value == null || mobilenumber.value == "") {
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
        if (state.value === "") {
            alert("Please select your state!");
            submitValue = false;
            state.focus();
        }
    }
    if (submitValue) {
        if (getSelectedInterest != null) {
            submitValue = true;
            var mydata = "";
            for (var i = 0; i < getSelectedInterest.length; i++) {

                mydata = mydata + getSelectedInterest[i].value + "\n";
            }
            getSelectedInterest.value = mydata;
        }
        else {
            alert("Please select interest");
            submitValue = false;
        }
    }
    if (submitValue) {
        if (comments.value === "") {
            alert("Please enter comments")
            submitValue = false;
            comments.focus();
        }
    }
    if (submitValue) {
        var finalSelection = " Entered Values are  \n" +
            "\n " +
            "Name is          : " + username.value + "\n" +
            "\n " +
            "E-mail is        : " + email.value + "\n" +
            "\n " +
            "Gender is        : " + getSelectedValue.value + "\n" +
            "\n " +
            "State is         : " + state.value + "\n" +
            "\n " +
            "Interested is    : " + getSelectedInterest.value + "\n" +
            "\n " +
            "Comments is      : " + comments.value + "\n" +
            "\n ";
        alert(finalSelection);
    }
    localStorage.setItem('test-item', finalSelection);

    return submitValue;
}
function addCode() {
    document.getElementById("add_to_me").innerHTML +=
        "<h3>" + localStorage.getItem('test-item') + "</h3>";
}



/*************************************************************Task8******************************************************/

function calculate(){
    var a = parseInt(document.getElementById('bookone').value);
    var b = parseInt(document.getElementById('booktwo').value);
    var c = parseInt(document.getElementById('bookthree').value);
    var d = parseInt(document.getElementById('bookfour').value);
    var e = parseInt(document.getElementById('bookfive').value);

    if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please Enter Correct Value");
    }
    else {
        var obtain = a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
        var per = obtain/500*100;
        document.getElementById("per").innerHTML=per;  
        if(a>35 && b>35 && c>35 && d>35 & e>35){
        document.getElementById("remarks").innerHTML="<span style='color:green'>Pass</span>";
        }
        else{
        document.getElementById("remarks").innerHTML="<span style='color:Red'>Fail</span>";
        } 
    
        if(per>=80){
            document.getElementById("grade").textContent="A";
        }
        else if(per>=60){
            document.getElementById("grade").textContent="B";
        }
        else if(per>=50){
            document.getElementById("grade").textContent="C";
        }
        else if(per>=40){
            document.getElementById("grade").textContent="D";
        }
        else{
                document.getElementById("grade").textContent="F";
            }
    }
}
    
/******************************************task9********************************************************************/

const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();

    let myTable = document.getElementById('myTable');

    let tr = myTable.getElementsByTagName('tr');

    for(var i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[1];

        if(td){
            let textvalue = td.textContent || td.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) >-1){

                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
    }
}