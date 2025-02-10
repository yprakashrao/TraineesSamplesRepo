function pageload(){
    document.getElementById("Clang").style.display = "none";    
    document.getElementById("C++lang").style.display = "none";
    document.getElementById("Javalang").style.display = "none";
    document.getElementById("myform1").style.display = "none";
    document.getElementById("myform2").style.display = "none";
    document.getElementById("myform3").style.display = "none";   
}

function language(){
    var language = document.querySelector('input[name= "lang"]:checked');
    if(language.value == "C"){       
        document.getElementById("Clang").style.display = "block";    
        document.getElementById("C++lang").style.display = "none";
        document.getElementById("Javalang").style.display = "none";
        document.getElementById("myform1").style.display = "none";
        document.getElementById("myform2").style.display = "none";
        document.getElementById("myform3").style.display = "none";       
    }
    else if(language.value == "C++"){       
        document.getElementById("Clang").style.display = "none";    
        document.getElementById("C++lang").style.display = "block";
        document.getElementById("Javalang").style.display = "none";
        document.getElementById("myform1").style.display = "none";
        document.getElementById("myform2").style.display = "none";
        document.getElementById("myform3").style.display = "none";       
    }
    else if(language.value == "Java"){       
        document.getElementById("Clang").style.display = "none";    
        document.getElementById("C++lang").style.display = "none";
        document.getElementById("Javalang").style.display = "block";
        document.getElementById("myform1").style.display = "none";
        document.getElementById("myform2").style.display = "none";
        document.getElementById("myform3").style.display = "none";       
    }
    
}

function showform(){
    var dd1 = document.getElementById("clanguage");    
    var dd2 = document.getElementById("c++language");    
    var dd3 = document.getElementById("javalanguage");        
  
    if((dd1.value == "" || dd1.value == null ) && (dd2.value == "" || dd2.value == null ) &&
    (dd3.value == "" || dd3.value == null))
        {
        document.getElementById("myform1").style.display = "none";
        document.getElementById("myform2").style.display = "none";
        document.getElementById("myform3").style.display = "none"; 
        alert("hi"); 
        }
    else if (dd1.value != "" && dd2.value =="" && dd3.value =="")
        {
            document.getElementById("myform1").style.display ="block";
            document.getElementById("myform2").style.display = "none";
        document.getElementById("myform3").style.display = "none"; 
        }
    else if (dd1.value == "" && dd2.value !="" && dd3.value =="")
        {
            document.getElementById("myform2").style.display ="block";
            document.getElementById("myform1").style.display = "none";
            document.getElementById("myform3").style.display = "none"; 
        }
    else if (dd1.value == "" && dd2.value ==""&& dd3.value !="")
        {
            document.getElementById("myform3").style.display ="block";
            document.getElementById("myform1").style.display = "none";
        document.getElementById("myform2").style.display = "none";
        }
    }
function onfocusevent(){
    document.getElementById("clanguage").style.background = "lightgreen" ; 
    document.getElementById("c++language").style.background = "lightblue"; 
    document.getElementById("javalanguage").style.background = "lightpink" ; 
}

function formvalidation(){   
    var Name = document.getElementById("name");
    var Number = document.getElementById("number");
    var Email = document.getElementById("email");
    var submitValue = true;
    
    if(submitValue){
    if (Name.value == null || Name.value == ""){
        alert("Please enter name");
        Name.focus();
        submitValue = false;
    }    
}
    if (submitValue) {
        if (!Name.value.match(/^[a-zA-Z\s]*$/)) {
            alert("please enter characters");
            Name.focus();
            submitValue = false;
        } 
    }
    if (submitValue) {
        if (Number.value == null || Number.value == "") {
            alert("Enter phone number");
            Number.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (!Number.value.match(/^[0-9]*$/)) {
            alert("please enter numerals");
            Number.focus();
            submitValue = false;
        } 
    }
    if(submitValue){
        if(Number.length != 10){
            alert("Please enter 10 digits");
            Number.focus();
            submitValue = false;
        }
    }
    if (submitValue) {
        if (Email.value == null || Email.value == "") {
            alert("please enter Email");
            Email.focus();
            submitValue = false;
        } 
    }
    if (submitValue) {
        if (!Email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
            alert("Please enter valid Email");
            Email.focus();
            submitValue = false;
        } 
    }
    return submitValue;
}
      
   /* var Clang = document.getElementById("Clang");   
    var dropdown2 = document.getElementById("C++lang");
    var dropdown3 = document.getElementById("Javalang");    
    var checkbox = document.querySelectorAll('input[name = "fruits"]:checked');
    var about = document.getElementById("comment");*/
  
function formvalidation1(){
    var password = document.getElementById("password");
    var radio1 = document.querySelector('input[name= "gender"]:checked');
    var dropdown4 =document.getElementById("Group");
    var submitValue = true;
    if (submitValue) {
        if (password.value == null || password.value == "") {
            alert("please enter password");
            password.focus();
            submitValue = false;
        } 
    }

}