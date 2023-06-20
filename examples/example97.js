function foo() {
        return [function() { return "x"; }, function() {return "y"; }];
      }
var qoute = foo(); //1
qoute[0](); //1