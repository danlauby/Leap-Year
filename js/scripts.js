// Buisness logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }  else {
    return false;
  }

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
