$(document).ready(function(){
    console.log("First code..");
$('#btn1').click(function(){
    console.log("click");
   // $("#container").hide();
    $("#container").fadeOut(2000,function(){
        alert("gone..");
    });
});
$('#btn2').click(function(){
    console.log("click");
    //$("#container").show();
    $("#container").fadeIn();
});
$("#btn3").click(function(){
    $("#container").fadeToggle(); 
});

$("#btn4").click(function(){
    $("#container").fadeTo(250,0.5,function(){
        alert("faded");
    });
});


$('#btn6').click(function(){
  $("#container").slideUp();
});

$('#btn5').click(function(){
    $("#container").slideDown();
  });
});