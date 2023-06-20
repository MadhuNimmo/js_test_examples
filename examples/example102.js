var lst = [function x(){ return "x"}, function y(){ return "y"}]
function foo(...fooarg){
        for (var arg=0; arg< fooarg.length;arg++) {
                fooarg[arg](); //2 //may not be captured in SCG
        }
}
foo(function x(){ return "x"}, function y(){ return "y"}) //1
function bar(bararg1,bararg2){
        bararg1(); //2 //may not be captured in SCG
        bararg2(); //2 //may not be captured in SCG
}
bar(...lst) //1
function dave(something, ...fooarg){
        something(); //2
        for (var arg of fooarg) {
                arg(); //2 //may not be captured in SCG
        }
}
dave(function x(){ return "x"}, function y(){ return "y"}, function z(){ return "z"}) //1