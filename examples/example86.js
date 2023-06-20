var x = "b";
function getKeys(inp) {
  return "a" + inp;
}
var capitalize = {
  alpha: {
    ab: function () {
      return "A";
    },
  },
};
var key = getKeys(x); //1
cap = capitalize.alpha;
cap[key](); //1 //may not be captured in SCG