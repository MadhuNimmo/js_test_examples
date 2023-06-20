var expr = "foo";

var obj = {
  get [expr]() {
    return "bar";
  },
};

obj.foo; //1 //may not be captured in SCG