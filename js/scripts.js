$(document).ready(function() {
  $("#quiz").submit(function(event) {
    var location = $("#location").val();
    var type = $("#type").val();
    var interest = $("#interest").val();
    var company = $("#company").val();
    var learn = $("#learn").val();

    if (type === "1") {
      $(".ruby, .design").hide();
      $(".csharp, .try-it").hide();
      $(".intro").show();
    } else if (interest === "2" && type === "2" && company === "2") {
      $(".intro, .design").hide();
      $(".csharp, .try-it").hide();
      $(".ruby").show();
    } else if (type === "2" && interest === "1") {
      $(".intro, .ruby").hide();
      $(".csharp, .try-it").hide();
      $(".design").show();
    } else if (type === "2" && interest === "3" && company === "1") {
      $(".intro, .try-it").hide();
      $(".ruby, .design").hide();
      $(".csharp").show();
    } else {
      $(".intro, .ruby").hide();
      $(".design, .csharp").hide();
      $(".try-it").show();
    }


    event.preventDefault();
  });
});
