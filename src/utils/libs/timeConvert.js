Number.prototype.pad = function (size) {
  var s = String(this);
  while (s.length < (size || 2)) {
    s = 0 + s;
  }
  return s;
};

const timeConvert = (n) => {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes.pad(2) + "m";
};

export { timeConvert };
