$(document).ready(function() {

$("#work1").hover(function() {
  $("#work1").css("filter","brightness(50%)");
  $("#div1").toggle();
});
$("#work1").hover(function() {
  $("#work1").css("filter","brightness(50%)");
  $("#div1").toggle();
});

});



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


function formSubmit() {
  let name = document.getElementById("mc-NAME").value;
  let email = document. getElementById("mc-Email").value;
  let message = document.getElementById("mc-MESSAGE").value;

  alert (name + " " + "we have received your message. Thank you for reaching out to us.")
}