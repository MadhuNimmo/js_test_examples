function foo(x) {
  return x;  
}
function bar(){ 
  return;  
}
var y = foo(bar);  //1
y(); //2