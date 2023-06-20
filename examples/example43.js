var arrayOfFunction = [
        function () {
          console.log("Inside First function");
        },
      
        function () {
          console.log("Inside Second function");
        },
      
        function () {
          console.log("Inside Third function");
        },
      ];
var x = function () {
        return 1;
};
var y = x(); //1
arrayOfFunction[y](); //1 //may not be captured in SCG