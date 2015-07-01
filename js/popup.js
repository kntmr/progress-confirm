function padding(v) {
  return ('0' + v).slice(-2);
}

function output() {
  var d = new Date();
  var h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();

  $('#output').html(
    padding(h) + ':' +
    padding(m) + ':' +
    padding(s));

  setTimeout(function() {
    output();
  }, 1000);
}

$(function() {
  output();
});
