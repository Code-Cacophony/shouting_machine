$(document).ready(function() {
  $("#formOne").submit(function(event) {

    var personInput = $("input#person").val();
    var personResult = personInput.toUpperCase();
    

    $(".person").append(personResult);
    
    $("#result").show();

    event.preventDefault(); 
  });
});