var obj = {};
obj.x = function f1(f) {
  return foo();
};
obj.y = function f2(f) {
  f == "foo" ? foo() : bar(); //1
};
var m = obj["y"];
foo = function () {
  return "foo called";
};
bar = function () {
  return "bar called";
};
m("foo"); //1