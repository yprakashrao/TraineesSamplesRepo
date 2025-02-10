function pageload() {
    document.getElementById("hidedisplay1").style.display = "none";
    document.getElementById("hidedisplay2").style.display = "none";
    document.getElementById("hidedisplay3").style.display = "none";
    document.getElementById("formforall").style.display = "none";
}
function Interests() {
    var language = document.querySelector('input[name="interests"]:checked');

    if (language.value == "Java") {
        document.getElementById("hidedisplay1").style.display = "block";
        document.getElementById("hidedisplay2").style.display = "none";
        document.getElementById("hidedisplay3").style.display = "none";
        document.getElementById("formforall").style.display = "none";
    } else if (language.value == "HTML") {
        document.getElementById('hidedisplay1').style.display = "none";
        document.getElementById("hidedisplay2").style.display = "block";
        document.getElementById("hidedisplay3").style.display = "none";
        document.getElementById("formforall").style.display = "none";
    } else if (language.value == "CSS") {
        document.getElementById("hidedisplay1").style.display = "none";
        document.getElementById("hidedisplay2").style.display = "none";
        document.getElementById("hidedisplay3").style.display = "block";
        document.getElementById("formforall").style.display = "none";
    }

}
function hiddenformvalidation() {
    // Validation of image     
    var imagefile = document.getElementById("logo");
    var filePath = imagefile.value;
    var allowedExtensions = /(\.png)$/i;
    var submitvalue = true;

    if (imagefile.value == "" || imagefile.value == null) {
        alert("Please upload a file");
        imagefile.focus();
        submitvalue = false;
    }
    if (submitvalue) {
        if (!allowedExtensions.exec(filePath)) {
            alert("Invalid file type");
            imagefile.focus();
            submitvalue = false;
        }
    }
    //radio validation
    var language = document.querySelector('input[name="interests"]:checked');
    if (submitvalue)
    {
     if (language != null)    {
        submitvalue = true;    
     }
     else
     {
       alert("Please select any technologie");
       submitvalue = false;        
     }
    }

    var Course1 = document.getElementById("Course1");
    var Course2 = document.getElementById("Course2");
    var Course3 = document.getElementById("Course3");

    if(submitvalue){
        if(Course2.value == "" && Course1.value === "" && Course3.value ===""){
            alert("Please select course");
            submitvalue =false;
        }
    }
    if(Course2.value != "" || Course1.value != "" || Course3.value !=""){
    var name = document.getElementById("name");
    if (submitvalue)
    {
    if (name.value == null || name.value == "") {
     alert("Please enter the name");
     name.focus();
     submitvalue = false;
   }
   }
}
if (submitvalue) {
    if (!name.value.match(/^[a-zA-Z\s]*$/)) {
        alert("please enter characters");
        name.focus();
        submitvalue = false;
    } else {
        submitvalue = true;
    }
}
//phonenumber validations
var phonenumber = document.getElementById("pnumber");
if (submitvalue) {
    if (phonenumber.value == null || phonenumber.value == "") {
        alert("Enter phonenumber");
        phonenumber.focus();
        submitvalue = false;
    } else {
        submitvalue = true;
    }
}
if (submitvalue) {
    if (!phonenumber.value.match(/^[0-9]*$/)) {
        alert("please enter numerics");
        phonenumber.focus();
        submitvalue = false;
    } else {
        submitvalue = true;
    }
}
//Checkbox validation
var checkbox = document.querySelectorAll('input[name="Hobbies"]:checked');
if (submitvalue) {
    if (!checkbox.length) {
        alert("Please select Hobbies");
        submitvalue = false;
    } else {
        submitvalue = true;
    }
}
 //Textarea validation
 var textarea = document.getElementById("Comment");
 if (submitvalue) {
     if (textarea.value == null || textarea.value == "") {
         alert("Enter your feedback");
         textarea.focus();
         submitvalue = false;
     } else {
         submitvalue = true;
     }
 }  
    
   
return submitvalue;
}

function showdropdown(){
        
    var Branch1 = document.getElementById("Course1");    
    var Branch2 = document.getElementById("Course2");    
    var Branch3 = document.getElementById("Course3");        
      
    if((Branch1.value == "" || Branch1.value == null ) && (Branch2.value == "" || Branch2.value == null ) &&
    (Branch3.value == "" || Branch3.value == null))
        {
            document.getElementById("formforall").style.display ="none";
        }
    else if (Branch1.value != "" && Branch2.value =="" && Branch3.value =="")
        {
            document.getElementById("formforall").style.display ="block";
        }
    else if (Branch1.value == "" && Branch2.value !="" && Branch3.value =="")
        {
            document.getElementById("formforall").style.display ="block";
        }
    else if (Branch1.value == "" && Branch2.value ==""&& Branch3.value !="")
        {
            document.getElementById("formforall").style.display ="block";
        }
    else
        {
            document.getElementById("formtable").style.display ="none";
        }
}
