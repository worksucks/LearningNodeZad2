
//var os1 = require('os')

function time_conv(sec) {
  //var sec =os1.uptime();
  var hours = Math.floor(sec/3600);
  var minutes = Math.floor((sec % 3600) / 60);
  var seconds = Math.floor((sec % 3600) % 60);
  //return hours +' h ' + minutes +' min '+ seconds + 'sec';
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
}

exports.time = time_conv();
