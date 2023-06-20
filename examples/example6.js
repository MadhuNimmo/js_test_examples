function foo(x) {
        return x; 
}
function bar(){  
        return "bar";
}
function dave(){
        return "dave";
}
var y = foo(dave,bar); //1
y(); //2