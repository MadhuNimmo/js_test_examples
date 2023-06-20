function foo(x) {
        return bar(x); //1
}
function bar(y){  
        return y(); //2
}
function dave(){
        return "dave";
}
var y = foo(dave); //1