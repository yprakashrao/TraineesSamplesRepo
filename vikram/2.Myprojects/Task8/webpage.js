// getting all required html elements
var Name = document.getElementById("name");
var Name1 = document.getElementById("name1");
var minAge = document.getElementById("minage");
var maxAge = document.getElementById("maxage");
var totalage = document.getElementById("totalage");
var Location = document.getElementById("location");
var location1 = document.getElementById("location1");
var NameAlert = document.getElementById("namealert");
var minAgeAlert = document.getElementById("minagealert");
var Img = document.getElementById("selectimg");

//validating name and displaying name on typing
function nameVal() {
  Name1.innerHTML = `Name: ${Name.value}`;

  if (!Name.value.match(/^[a-zA-Z\s]*$/)) {
    NameAlert.style.display = "inline";
  }

  if (Name.value.match(/^[a-zA-Z\s]*$/)) {
    NameAlert.style.display = "none";
  }
}

// validating age and displaying total age on typing
function ageVal() {
  totalage.innerHTML = `Total Age: ${
    Number(minAge.value) + Number(maxAge.value)
  }`;

  if (Number(minAge.value) > Number(maxAge.value)) {
    minAgeAlert.innerHTML = "Min age cannot be greater than Max age ";
    minAgeAlert.style.display = "inline";
  }

  if (Number(minAge.value) < Number(maxAge.value)) {
    minAgeAlert.style.display = "none";
  }

  if (Number(minAge.value) == Number(maxAge.value)) {
    minAgeAlert.innerHTML = "Min age and Max age cannot be equal";
    minAgeAlert.style.display = "inline";
  }

  if (minAge.value == "" || maxAge.value == "") {
    minAgeAlert.style.display = "none";
  }

  if (minAge.value == null || maxAge.value == null) {
    minAgeAlert.style.display = "none";
  }

  if (!minAge.value.match(/^[0-9]*$/) || !maxAge.value.match(/^[0-9]*$/)) {
    minAgeAlert.innerHTML = "Age cannot contain characters";
    minAgeAlert.style.display = "inline";
  }
}

// validating location and displaying location on typing
function locSel() {
  location1.innerHTML = `Location: ${Location.value}`;
  if (Location.value == "TS") {
    Img.src = "../../4.Images/task8-1.webp";
  }
  if (Location.value == "AP") {
    Img.src = "../../4.Images/task8-2.webp";
  }
  if (Location.value == "MH") {
    Img.src = "../../4.Images/task8-3.webp";
  }
  if (Location.value == "KA") {
    Img.src = "../../4.Images/task8-4.webp";
  }
  if (Location.value == "KL") {
    Img.src = "../../4.Images/task8-5.jpg";
  }
}

// changing the image for every 3 seconds
var img1 ="../../4.Images/twitter.png";
var img2 ="../../4.Images/facebook.png";
var img3 = "../../4.Images/instagram.png";
let images = [img1, img2, img3];

let index = 0;
var Img3 = document.getElementById("threeimg");

function change() {
  Img3.src = images[index];
 index > 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 500);
};
