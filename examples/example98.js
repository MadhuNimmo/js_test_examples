var m = function() { return 2; } 
var n = function() { return m();} //1
n(); //1
function main(){
  var x = function() { return 2; } 
  var y = function() { return x();} //1
  y(); //1
}
main(); //1