function hiddendropdown(){
    var Name = document.getElementById("name");
    var PhoneNumber = document.getElementById("number");
    var Gender = document.querySelector('input[name="gender"]:checked');
    var Interests = document.getElementById("language");
    var fruits = document.getElementById("fruits");
    var courses = document.getElementById("courses");
    var submitValue = true;
    var SubmitValue = true; 

    // name validations
    if(Name.value == "" || Name.value == null){
        alert("please enter name");
        Name.focus();
        submitValue = false;
        }
    if(submitValue){
        if(!Name.value.match(/^[a-zA-Z\s]*$/)){
            alert("please enter characters");
            Name.focus();
            Name.value = "";
            submitValue = false;            
        }
    }
    //number validations
    if(submitValue){
        if(PhoneNumber.value == "" || PhoneNumber.value == null){
            alert("please enter number");
            PhoneNumber.focus();
            submitValue = false;
            }
        }    
    if(submitValue){
        if(!PhoneNumber.value.match(/^[0-9\s]*$/)){
            alert("please enter numerals");
            PhoneNumber.focus();
            submitValue = false;
             }
    }
    if (submitValue) {
        if (!PhoneNumber.value.match(/^[1-9][0-9]{9}$/)){
          alert("Phone number must be 10 digits and first digit can't be 0!");
          PhoneNumber.focus();
          submitValue = false;
        }
    }
    //gender validations
    if (submitValue) {
        if ( Gender != null) {
          submitValue = true;
        } else {
          alert("Please select gender");
          submitValue = false;
        }
      } 
    //dropdown validaitions
    if(SubmitValue){
    if(submitValue){
        if(Interests.value == null || Interests.value ==""){
            alert("please select interests");
            Interests.focus();
            submitValue = false;
        }else{
            SubmitValue= false;            
        }
    }
}
    //dropdown2 validations
    if(SubmitValue){    
    if(submitValue){
        if(fruits.value == null || fruits.value ==""){
            alert("please select fruits");
            fruits.focus();
            submitValue = false;
        }else{
            SubmitValue= false;            
        }
    }
}
    //dropdown3 validations
    if(SubmitValue){
    if(submitValue){
        if(courses.value == null || courses.value == "") {
            alert("please select course");
            courses.focus();
            submitValue= false;
        }else{
            SubmitValue= false;            
        }
    }
}
    //displaying result
    if(submitValue){
        var EnteredValues = "Given data is :\n"+ "\n"+
        "Name : "+  Name.value  + "\n" +
        "Phone Number :" + PhoneNumber.value + "\n"+
        "Gender : "+ Gender.value + "\n"+
        "Interests : "+ Interests.value + "\n"+
        "Fruits : " + fruits.value + "\n"+
        "Courses : "+ courses.value + "\n";
        alert(EnteredValues);
     }
    return submitValue;  
}

function pageload(){
    document.getElementById("myinterest").style.display = "none";
    document.getElementById("myfruits").style.display = "none";
    document.getElementById("mycourse").style.display = "none";
}
function genderradio(){
    var Gender = document.querySelector('input[name="gender"]:checked');
      var SubmitValue = true; 
        if(Gender.value == "Male"){    
          document.getElementById("myinterest").style.display ="block";
          document.getElementById("myfruits").style.display ="none";
          document.getElementById("mycourse").style.display ="none";
          if(SubmitValue){
          var EnteredValue = "Given data is :\n"+ "\n"+
          "Name : "+  Name.value  + "\n" +
          "Phone Number :" + PhoneNumber.value + "\n"+
          "Gender : "+ Gender.value + "\n"+
          "Interests : "+ Interests.value + "\n";
          alert(EnteredValue);
          }else{
            return SubmitValue = false;
          }          
        }
        else if(Gender.value == "Female") {    
          document.getElementById("myfruits").style.display ="block"
          document.getElementById("myinterest").style.display ="none";          
          document.getElementById("mycourse").style.display ="none";
          if(SubmitValue){
            var EnteredValue = "Given data is :\n"+ "\n"+
            "Name : "+  Name.value  + "\n" +
            "Phone Number :" + PhoneNumber.value + "\n"+
            "Gender : "+ Gender.value + "\n"+
            "Fruits : " + fruits.value + "\n"+            
            alert(EnteredValue);
            }else{
              return SubmitValue = false;
            }          
         
        }else if(Gender.value == "Others"){
            document.getElementById("mycourse").style.display ="block";
          document.getElementById("myinterest").style.display ="none";
          document.getElementById("myfruits").style.display ="none";  
          if(SubmitValue){
            var EnteredValue = "Given data is :\n"+ "\n"+
            "Name : "+  Name.value  + "\n" +
            "Phone Number :" + PhoneNumber.value + "\n"+
            "Gender : "+ Gender.value + "\n"+
            "Courses : "+ courses.value + "\n";                      
            alert(EnteredValue);
            }else{
              return SubmitValue = false;
            }               
          
        }    
}