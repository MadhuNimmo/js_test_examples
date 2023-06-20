var x = {};
var z = {};
var y = {
        foo : function() {
        return "foo";
      },
        bar : function() {
                return "bar";
      },
};
var z = y.foo;
var w = z
var n = y.bar;
z.bar = n
x.foo = w;
z.bar(); //1
x.foo(); //1