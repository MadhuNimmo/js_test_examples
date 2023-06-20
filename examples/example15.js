var x = "y";
function foo(baz) {
  return baz(); //2
}
function bar() {
  return "bar";
}
x == "" ? bar() : foo(bar); //1