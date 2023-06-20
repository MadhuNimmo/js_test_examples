function foo(x) {
        return x;
}
Function.prototype.apply.call(foo, undefined, ["hi I am x"]); //1  //may not be captured in SCG
      