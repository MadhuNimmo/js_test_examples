var arr = [
  function () {
    return "x";
  },
];
Array.prototype.forEach.call(arr, function (val) {
  return val(); //2 //may not be captured in SCG
});