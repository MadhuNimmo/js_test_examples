(function () {
        function show(args) {
          args(); //2
        }
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
        show(arrayOfFunction[0]); //1
})(); //1
      