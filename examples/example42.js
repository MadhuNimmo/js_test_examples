var arrayOfFunction = [];
var alpha = ["x", "y"];
for (var val in alpha) {
        arrayOfFunction[alpha[val]] = function () {
        return val;
        };
}
arrayOfFunction.x(); //1 //may not be captured in SCG