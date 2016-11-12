
$(document).ready(function(){
//  console.log("test");

  $('.operator').on('click', function(event) {
    event.preventDefault();
    var numbers = {};
    var fields = $('#calculator').serializeArray();
    fields.forEach(function(element, index, array) {
      numbers[element.name] = element.value;
    });
    numbers.operator = this.getAttribute("id");
    console.log(numbers);

    $.ajax({
      type: 'POST',
      url: '/calculator',
      data: numbers,
      success: function(){
        console.log("success");
      },
      error: function(error){
        console.log('The "/calculator" ajax post request failed with error: ', error);
      }
    });

    $.ajax({
      type: 'GET',
      url: '/calculator',
      success: function(data){
        console.log("success");
        $("#result").text(data);
      },
      error: function(error){
        console.log('The "/calculator" ajax post request failed with error: ', error);
      }
    });
  });

  $("#result").on('click', function(event) {
    $("#firstNum").empty;
    $("#secondNum").empty;
    $("#result").empty;
  });

});
