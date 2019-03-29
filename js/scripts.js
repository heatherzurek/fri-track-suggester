$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var location = $("#location").val();
    var type = $("#type").val();
    var interest = $("#interest").val();
    var company = $("#company").val();
    var learn = $("#learn").val();

    if (type === "1") {
      $(".typeTwo, .typeThree").hide();
      $(".typeFour, .typeFive").hide();
      $(".typeOne").show();
    } else if (interest === "2" && type === "2" && company === "2" ) {
      $(".typeOne, .typeThree").hide();
      $(".typeFour, .typeFive").hide();
      $(".typeTwo").show();
    } else if (type === "2" && interest === "1") {
      $(".typeOne, .typeTwo").hide();
      $(".typeFour, .typeFive").hide();
      $(".typeThree").show();
    } else if (type === "2" && interest === "3" && company === "1") {
      $(".typeOne, .typeFive").hide();
      $(".typeTwo, .typeThree").hide();
      $(".typeFour").show();
    } else {
      $(".typeOne, .typeTwo").hide();
      $(".typeThree, .typeFour").hide();
      $(".typeFive").show();
    }


    event.preventDefault();
  });
});
