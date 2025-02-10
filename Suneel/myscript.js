// Select all input elements for varification

// function for form varification
function formValidation() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var phoneNumber = document.getElementById("phoneNumber");
  var language = document.getElementById("language");
  var zipcode = document.getElementById("zipcode");
  var comment = document.getElementById("about");
  var getSelectedValue = document.querySelector('input[name="gender"]:checked');
  var getSelectedInterest = document.querySelectorAll(
    'input[name="Interested"]:checked'
  );

  var submitValue = true;

  if (name.value == null || name.value == "") {
    alert("Please enter the name");
    name.focus();
    submitValue = false;
  }

  if (submitValue) {
    if (!name.value.match(/^[a-zA-Z\s]*$/)) {
      alert("Please enter characters only");
      name.focus();
      name.value = "";
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

  // checking email
  if (submitValue) {
    if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      alert("Please enter a valid email!");
      email.focus();
      email.value = "";
      submitValue = false;
    }
  }
  if (submitValue) {
    if (password.value == null || password.value == "") {
      alert("Please enter password");
      password.focus();
      submitValue = false;
    }
  }

  // checking password
  if (submitValue) {
    if (!password.value.match(/^.{5,15}$/)) {
      alert("Password length must be between 5-15 characters!");
      password.focus();
      submitValue = false;
    }
  }
  // checking phone number
  if (submitValue) {
    if (phoneNumber.value == null || phoneNumber.value == "") {
      alert("Pleae enter phone number");
      phoneNumber.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!phoneNumber.value.match(/^[0-9]+$/)) {
      alert("Pleae enter numbers only");
      phoneNumber.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
      alert(
        "Phone number must be 10 characters long number and first digit can't be 0!"
      );
      phoneNumber.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (getSelectedValue != null) {
      submitValue = true;
    } else {
      alert("Please select gender");
      submitValue = false;
    }
  }

  // checking language
  if (submitValue) {
    if (language.value === "") {
      alert("Please select your language!");
      submitValue = false;
      language.focus();
    }
  }
  // checking zip code
  if (submitValue) {
    if (zipcode.value == null || zipcode.value == "") {
      alert("Please enter zip code");
      zipcode.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!zipcode.value.match(/^[0-9]{6}$/)) {
      alert("Zip code must be 6 characters long number!");
      zipcode.focus();
      submitValue = false;
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
    } else {
      alert("Please select interest");
      submitValue = false;
    }
  }
  if (submitValue) {
    if (comment.value === "") {
      alert("Please enter comments");
      submitValue = false;
      comment.focus();
    }
  }
  if (submitValue) {
    var finalSelection =
      " Entered Values are  \n" +
      "\n " +
      "Name is          : " +
      name.value +
      "\n" +
      "\n " +
      "E-mail is        : " +
      email.value +
      "\n" +
      "\n " +
      "Password is      : " +
      password.value +
      "\n" +
      "\n " +
      "Gender is        : " +
      getSelectedValue.value +
      "\n" +
      "\n " +
      "Language is      : " +
      language.value +
      "\n" +
      "\n " +
      "Zip Code is      : " +
      zipcode.value +
      "\n" +
      "\n " +
      "Interested is    : " +
      getSelectedInterest.value +
      "\n" +
      "\n " +
      "Comments is      : " +
      comment.value +
      "\n" +
      "\n ";
    alert(finalSelection);
  }
  localStorage.setItem("test-item", finalSelection);

  return submitValue;
}

function addCode() {
  document.getElementById("add_to_me").innerHTML +=
    "<h3>" + localStorage.getItem('test-item') + "</h3>";
}

/----------------------------------------------------/

function validateFileType() {
  var fileName = document.getElementById("logo").value;
  var idxDot = fileName.lastIndexOf(".") + 1;
  var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
  if (extFile == "png") {
    //TO DO
  } else {
    document.getElementById("logo").value = "";
    alert("Please upload png format image  only.");
  }
}

function pageload() {
  document.getElementById("myDIV").style.display = "none";
  document.getElementById('FEDiv').style.display = "none";
  document.getElementById("ScDiv").style.display = "none";
  document.getElementById("formtable").style.display = "none";
}

function techonClick() {
  var getSelectedValue = document.querySelector('input[name="Technologies"]:checked');

  if (getSelectedValue.value == "java") {
    document.getElementById("myDIV").style.display = "block";
    document.getElementById('FEDiv').style.display = "none";
    document.getElementById("ScDiv").style.display = "none";
  } else if (getSelectedValue.value == "HTML") {
    document.getElementById('FEDiv').style.display = "block";
    document.getElementById("ScDiv").style.display = "none";
    document.getElementById("myDIV").style.display = "none";
  } else if (getSelectedValue.value == "Javascript") {
    document.getElementById("ScDiv").style.display = "block";
    document.getElementById("myDIV").style.display = "none";
    document.getElementById('FEDiv').style.display = "none";
  }

}
function showFormFields() {
  var getSelectedjLanguage = document.getElementById("jlanguage");
  var getSelectedFelanguage = document.getElementById('felanguage');
  var getSelectedSclanguage = document.getElementById('sclanguage');

  if ((getSelectedjLanguage.value == "" || getSelectedjLanguage.value == null) && (getSelectedFelanguage.value == "" || getSelectedFelanguage.value == null) && (getSelectedSclanguage.value == "" || getSelectedSclanguage.value == null)) {
    document.getElementById("formtable").style.display = "none";
  } else if (getSelectedjLanguage.value != "" && getSelectedFelanguage.value == "" && getSelectedSclanguage.value == "") {
    document.getElementById("formtable").style.display = "block";
  }
  else if (getSelectedjLanguage.value == "" && getSelectedFelanguage.value != "" && getSelectedSclanguage.value == "") {
    document.getElementById("formtable").style.display = "block";
  }
  else if (getSelectedjLanguage.value == "" && getSelectedFelanguage.value == "" && getSelectedSclanguage.value != "") {
    document.getElementById("formtable").style.display = "block";
  } else {
    document.getElementById("formtable").style.display = "none";
  }
}


function SubmitFormValidations() {
  var submitValue = false;
  var logo = document.getElementById("logo");
  var getSelectedValue = document.querySelector('input[name="Technologies"]:checked');
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var getSelectedGenderValue = document.querySelector('input[name="gender"]:checked');
  var password = document.getElementById("password");
  var phoneNumber = document.getElementById("phoneNumber");
  var zipcode = document.getElementById("zipcode");
  var comment = document.getElementById("about");
  var getSelectedInterest = document.querySelectorAll('input[name="Interested"]:checked');

  if (logo.value === "") {
    alert("Please select logo")
    submitValue = false;
    logo.focus();
  } else {
    submitValue = true;
  }


  if (submitValue) {
    if (getSelectedValue != null) {
      submitValue = true;
    }
    else {
      alert("Please select any technologie");
      submitValue = false;
    }
  }

  var jlanguage = document.getElementById("jlanguage");
  var felanguage = document.getElementById("felanguage");
  var sclanguage = document.getElementById("sclanguage");

  if (submitValue) {
    if (jlanguage.value === "" && felanguage.value === "" && sclanguage === "") {
      alert("Please select language");
      submitValue = false;
    }
  }
  if (jlanguage.value != "" || felanguage.value != "" || sclanguage != "") {
    if (submitValue) {
      if (name.value == null || name.value == "") {
        alert("Please enter the name");
        name.focus();
        submitValue = false;
      }
    }

    if (submitValue) {
      if (!name.value.match(/^[a-zA-Z\s]*$/)) {
        alert("Please enter characters only");
        name.focus();
        name.value = "";
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

    // checking email
    if (submitValue) {
      if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        email.value = "";
        submitValue = false;
      }
    }
    if (submitValue) {
      if (password.value == null || password.value == "") {
        alert("Please enter password");
        password.focus();
        submitValue = false;
      }
    }

    // checking password
    if (submitValue) {
      if (!password.value.match(/^.{5,15}$/)) {
        alert("Password length must be between 5-15 characters!");
        password.focus();
        submitValue = false;
      }
    }
    // checking phone number
    if (submitValue) {
      if (phoneNumber.value == null || phoneNumber.value == "") {
        alert("Pleae enter phone number");
        phoneNumber.focus();
        submitValue = false;
      }
    }

    if (submitValue) {
      if (!phoneNumber.value.match(/^[0-9]+$/)) {
        alert("Pleae enter numbers only");
        phoneNumber.focus();
        submitValue = false;
      }
    }

    if (submitValue) {
      if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
        alert("Phone number must be 10 characters long number and first digit can't be 0!");
        phoneNumber.focus();
        submitValue = false;
      }
    }

    if (submitValue) {
      if (getSelectedGenderValue != null) {
        submitValue = true;
      }
      else {
        alert("Please select gender");
        submitValue = false;
      }
    }

    // checking language
    if (submitValue) {
      if (language.value === "") {
        alert("Please select your language!");
        submitValue = false;
        language.focus();
      }
    }
    // checking zip code
    if (submitValue) {
      if (zipcode.value == null || zipcode.value == "") {
        alert("Please enter zip code");
        zipcode.focus();
        submitValue = false;
      }
    }

    if (submitValue) {
      if (!zipcode.value.match(/^[0-9]{6}$/)) {
        alert("Zip code must be 6 characters long number!");
        zipcode.focus();
        submitValue = false;
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
      } else {
        alert("Please select interest");
        submitValue = false;
      }
    }
    if (submitValue) {
      if (comment.value === "") {
        alert("Please enter comments");
        submitValue = false;
        comment.focus();
      }
    }
    if (submitValue) {
      var finalSelection =
        " Entered Values are  \n" +
        "\n " +
        "Name is          : " +
        name.value +
        "\n" +
        "\n " +
        "E-mail is        : " +
        email.value +
        "\n" +
        "\n " +
        "Password is      : " +
        password.value +
        "\n" +
        "\n " +
        "Gender is        : " +
        getSelectedValue.value +
        "\n" +
        "\n " +
        "Language is      : " +
        language.value +
        "\n" +
        "\n " +
        "Zip Code is      : " +
        zipcode.value +
        "\n" +
        "\n " +
        "Interested is    : " +
        getSelectedInterest.value +
        "\n" +
        "\n " +
        "Comments is      : " +
        comment.value +
        "\n" +
        "\n ";
      alert(finalSelection);
    }

  }
  return submitValue;
}

/*------------- Assignment three----------------------*/

startInterval();

function startInterval() {
  setInterval(displayNextImage, 3000);
}

var picPaths = ["UK.jpg", "usa.png", "WI.png"];
// An index to track the contender image 
var imageIndex = 0;
var bannerImage;
function onload() {
  document.getElementById("myname").value = "";
  document.getElementById("minage").value = "";
  document.getElementById("maxage").value = "";
  document.getElementById("location").value = "";
}
function checkCharacters() {
  var myname = document.getElementById("myname");
  if (!myname.value.match(/^[a-zA-Z\s]*$/)) {
    document.getElementById("mynamemsg").innerHTML = "Please enter characters only";
    myname.focus();
    myname.value = "";
  } else {
    document.getElementById("mynamemsg").innerHTML = "";
    document.getElementById("selname").innerHTML = myname.value;
  }
}
function checkMinAge() {
  var minage = document.getElementById("minage");
  if (!minage.value.match(/^[0-9]+$/)) {
    document.getElementById("minagemsg").innerHTML = "Please enter numbers only";
    minage.focus();
    minage.value = "";
  } else {
    document.getElementById("minagemsg").innerHTML = "";
  }
}
function checkMaxAge() {
  var maxage = document.getElementById("maxage");
  var minage = document.getElementById("minage");
  if (!maxage.value.match(/^[0-9]+$/)) {
    document.getElementById("maxagemsg").innerHTML = "Please enter numbers only";
    maxage.focus();
    maxage.value = "";
  } else {
    if (parseInt(maxage.value) < parseInt(minage.value)) {
      document.getElementById("maxagemsg").innerHTML = "Minimum age should be less than maximum age";
    } else {
      document.getElementById("maxagemsg").innerHTML = "";
      document.getElementById("totalage").innerHTML = sum(maxage.value, minage.value);

    }

  }
}

function sum(a, b) {
  var c = parseInt(a) + parseInt(b);
  return c;
}
function showMap() {
  var location = document.getElementById("location");
  var img = document.getElementById("locationmap");
  if (location.value == "India") {
    img.src = "India.jpg";
    document.getElementById("selLocation").innerHTML = location.value;
  }
  if (location.value == "USA") {
    img.src = "usa.png";
    document.getElementById("selLocation").innerHTML = location.value;
  }
  if (location.value == "WI") {
    img.src = "WI.png";
    document.getElementById("selLocation").innerHTML = location.value;
  }
  if (location.value == "UK") {
    img.src = "UK.jpg";
    document.getElementById("selLocation").innerHTML = location.value;
  }
  if (location.value == "Srilanka") {
    img.src = "srilanka.jpg";
    document.getElementById("selLocation").innerHTML = location.value;
  }
}

function displayNextImage() {
  bannerImage = document.getElementById('slides');
  bannerImage.src = picPaths[imageIndex];
  if (imageIndex === (picPaths.length - 1)) {
    imageIndex = 0;
  }
  else {
    imageIndex = imageIndex + 1; // It can be replaced with imageIndex ++  
  }
}

