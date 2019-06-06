$(document).ready(function() {
  $("form#mail").submit(function(event) {
    var nameInput = $("input#person1").val();

      $(".person1").text(nameInput);

      $("#letter").show();


    event.preventDefault();
  });
});
