$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var type = $("#type").val();
    var interest = $("#interest").val();
    var company = $("#company").val();



    event.preventDefalult();
  });
});
