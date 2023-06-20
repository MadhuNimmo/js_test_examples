(function () {
        var obj = {}
        function propCreate(name) {
                obj[name] = function () { return "ok" };

        };
        var arr = ["x", "y"]
        for (var item in arr) {
                propCreate(arr[item]); //1
        }
        obj["x"](); //1 //may not be captured in SCG
})() //1