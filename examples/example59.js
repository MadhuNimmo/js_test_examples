(function () {
        var obj = {
                foo: function () {
                        return 3;
                },
        };
        var y = function () {
                var x = obj["fo" + "o"];
                return x(); //1 //may not be captured in SCG
        };
        y(); //1
})(); //1