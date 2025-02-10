
function namevalidate() {
      var name = document.getElementById("name").value;
      document.getElementById("demo").innerHTML = name;      
      if (!name.match(/^[a-zA-Z\s]*$/)) {
      document.getElementById("char").innerHTML = "enter only characters ";   
}
}

function minvalidate(){           
      var minage = document.getElementById("minage").value;   
      var maxage = document.getElementById("maxage").value;    
     if(minage==maxage){
      document.getElementById("age1").innerHTML = "min and max age should not be equal";
      }
}

function maxvalidate(){
      var minage = document.getElementById("minage").value;
      var maxage = document.getElementById("maxage").value; 
      if(maxage<=minage){
      document.getElementById("age2").innerHTML = "maximum age should not be less or equal to minimum age";
      }else { 
      document.getElementById("age2").innerHTML = "";            
      document.getElementById("demo1").innerHTML= (parseInt(maxage) + parseInt(minage)); 
      }
}

function locationvalidate(){
      var country = document.getElementById("country").value;
      document.getElementById("demo2").innerHTML = country;   
      if(country == "India"){
            document.getElementById("myimg").src = "Indiaflag.jpg";            
      }else if(country == "USA"){
            document.getElementById("myimg").src = "USA.jpg";           
      }else if(country == "UK"){
            document.getElementById("myimg").src = "UK.jpg";          
      }else if(country == ""||country == null){
            document.getElementById("myimg").src = "none";             
      } 
}

var i = 0;
var images = [];
images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
function changeImg(){
      document.slide.src = images[i];
      if(i < images.length - 1){
            i++;
      }else {
            i = 0;
      }
      setTimeout("changeImg()", 5000);
}
window.onload = changeImg;