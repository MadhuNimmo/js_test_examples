function f(val) {
        return val;
}
function g() {
        return "g";
}
function x(fun) {
        return fun(); //2
}
function y() {
        return "y";
}
x(y() ? f(function () { return "value"; }) : g()); //1 //1 //1