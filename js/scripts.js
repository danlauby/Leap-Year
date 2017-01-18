// Buisness logic
var leapYear = function(year) {
  return false;
}



// User logic
$(function() {
  $('form#leap-year').submit(function(e) {
    var year = parseInt($('input#year').val());
    var result = leapYear(year);
    $('#result').text(result);
    e.preventDefault();
  });
});
