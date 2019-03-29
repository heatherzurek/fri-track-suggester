$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var location = $("#location").val();
    var type = $("#type").val();
    var interest = $("#interest").val();
    var company = $("#company").val();
    var learn = $("#learn").val();
    // var name = $("#name").val();

    if (type === "1") {
      $(".typeTwo").hide();
      $(".typeOne").show();
    } else if (interest === "2" && type === "2" && company === "2" ) {
      $(".typeOne, .typeThree").hide();
      $(".typeTwo").show();
    } else if (type === "2" && interest === "1") {
      $(".typeTwo, .typeOne").hide();
      $(".typeThree").show();
    } else if (type === "2" && interest === "3" && company === "1") {
      $(".typeOne").hide();
      $(".typeTwo, .typeThree").hide();
      $(".typeFour").show();
    } else {
      $(".typeOne, .typeTwo").hide();
      $(".typeThree, .typeFour").hide();
      $(".typeFive").show();
    }

    // $(".name").text(nameInput);

    event.preventDefault();
  });
});
