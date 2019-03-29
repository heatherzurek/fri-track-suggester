$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var location = $("#location").val();
    var type = $("#type").val();
    // var interest = $("#interest").val();
    // var company = $("#company").val();
    // var android = $("#android").val();

    if (type === "1") {
          $(".typeOne").show();
    } else {

    }

    event.preventDefault();
  });
});
