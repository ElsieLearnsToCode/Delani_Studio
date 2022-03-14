$(document).ready(function() {

$("#work1").hover(function() {
  $("#work1").css("filter","brightness(50%)");
  $("#div1").toggle();
});
$("#work2").hover(function() {
  $("#work2").css("filter","brightness(50%)");
  $("#div2").toggle();
});
$("#work3").hover(function() {
  $("#work3").css("filter","brightness(50%)");
  $("#div3").toggle();
});
$("#work4").hover(function() {
  $("#work4").css("filter","brightness(50%)");
  $("#div4").toggle();
});
$("#work5").hover(function() {
  $("#work5").css("filter","brightness(50%)");
  $("#div5").toggle();
});
$("#work6").hover(function() {
  $("#work6").css("filter","brightness(50%)");
  $("#div6").toggle();
});
$("#work7").hover(function() {
  $("#work7").css("filter","brightness(50%)");
  $("#div7").toggle();
});
$("#work8").hover(function() {
  $("#work8").css("filter","brightness(50%)");
  $("#div8").toggle();
});

});

// Toggle What-We-Do-Section
$(document).ready(function() {
  $("#image1").click(function() {
    $("#image1").toggle();
    $(".pdesign").toggle();
  });
  $(".pdesign").click(function() {
    $(".pdesign").toggle();
    $("#image1").toggle();
  });

});

$(document).ready(function() {
  $("#image2").click(function() {
    $("#image2").toggle();
    $(".pdevelopment").toggle();
  });
  $(".pdevelopment").click(function() {
    $(".pdevelopment").toggle();
    $("#image2").toggle();
  });

});

$(document).ready(function() {
  $("#image3").click(function() {
    $("#image3").toggle();
    $(".pproduct").toggle();
  });
  $(".pproduct").click(function() {
    $(".pproduct").toggle();
    $("#image3").toggle();
  });

});

// Function that takes in user input and gives them feedback
function formSubmit() {
  let name = document.getElementById("mc-NAME").value;
  let email = document. getElementById("mc-Email").value;
  let message = document.getElementById("mc-MESSAGE").value;

  alert (name + " " + "we have received your message. Thank you for reaching out to us.")
}