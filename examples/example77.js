var handler;
var obj = {
  foo: function () {
    handler = function () {
      return "x";
    };
  },
  bar: function (now) {
    return {
      event: function () {
        return now(); //2 //may not be captured in SCG
      },
    };
  },
  dan: function (fun) {
    return obj[fun](handler); //1 //may not be captured in SCG
  },
};
obj.foo(); //1
var x = obj.dan("bar"); //1
x.event(); //1