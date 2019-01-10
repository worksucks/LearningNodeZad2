


function time_conv(sec) {

  var hours = Math.floor(sec/3600);
  var minutes = Math.floor((sec % 3600) / 60);
  var seconds = Math.floor((sec % 3600) % 60);
  return hours +' h ' + minutes +' min '+ seconds + 'sec';
}

exports.time = time_conv;
