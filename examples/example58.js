(function () {
        var x = function () {
                return 0;
        };
        var y = function () {
                return x(); //1
        };
        y(); //1
})(); //1