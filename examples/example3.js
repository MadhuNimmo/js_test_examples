function foo(x) {
  return x; 
}
function bar(){
  return dave; 
}
function dave(){
  return; 
}
var y = foo(bar); //1
var z = y(); //2
z(); //3