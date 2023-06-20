var choose = function (name) {
        if (name == "foo") {
          foo(); //1 
        } else if (name == "bar") {
          bar();
        }
};
function foo() {
        return "foo";
}
function bar() {
        return "bar";
}
choose("foo"); //1