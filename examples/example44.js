(function (arr) {
        (function () {
          arr[0](); //1
        })(); //1
})([
        function () {
          return 1;
        },
        function () {
          return 2;
        },
]); //1
      