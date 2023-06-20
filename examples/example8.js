function foo(x) {
        return x; 
}
var y = foo(function(){return "quo"}); //1
y(); //2