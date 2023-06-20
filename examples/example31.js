(function () {
        var obj = {
        foo: function () {
                var x = obj["bar"];
                return x;
        },
        bar: function () {
                return "bar";
        },
        };
        function main() {
                var y = obj["fo" + "o"](); //1 //may not be captured in SCG
                y.call(this); //2  //may not be captured in SCG
        }
        main(); //1
})(); //1