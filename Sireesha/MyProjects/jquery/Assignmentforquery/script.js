$(document).ready(function () {


      $("#ap-d,#ts-d,#kl-d").hide();


      $("#state").click(function () {
            if ($("#state").val() == "ap") {
                  $("#ap-d").show();
                  $("#ts-d").hide();
                  $("#kl-d").hide();
            }

            if ($("#state").val() == "ts") {
                  $("#ap-d").hide();
                  $("#ts-d").show();
                  $("#kl-d").hide();
            }

            if ($("#state").val() == "kl") {
                  $("#ap-d").hide();
                  $("#ts-d").hide();
                  $("#kl-d").show();
            }
      })
})
