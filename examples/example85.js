var x = 0;
var index = ["a", "b"];
var capitalize = {
  a: function () {
    return "A";
  },
  b: function () {
    return "B";
  },
};
for (i in index) {
  x = index[i];
  capitalize[x](); //1 //1 //may not be captured in SCG
}