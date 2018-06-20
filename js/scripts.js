$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault();
    debugger
    var emptyArray = []
    var total = 0;
    var countTo = parseInt($("#number1").val());
    var countBy = parseInt($("#number2").val());

    var countingNumber = Math.floor(countTo/countBy);

    if (isNaN(countingNumber)) {
      alert("Enter some numbers");
    } else {
      for (index = 0; index <= countingNumber; index += 1) {
        total = index * countBy;
        emptyArray.push(total);
        $(".results").append(total);
      };
    };
  });
});
