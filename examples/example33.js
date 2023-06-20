(function () {
        var obj = {
                bar: function () {
                return "bar";
                },
                foo: function (x) {
                return x;
                },
        };
        function main() {
                var y = obj["fo" + "o"].apply(this, [obj["bar"]]); //1  //may not be captured in SCG
                y.apply(this); //2 //may not be captured in SCG
        }
        main(); //1
})(); //1