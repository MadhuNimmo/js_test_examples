var z = function () {
        return "z";
};
function bar() {
        return new Function("return(" + z + ")");
}
var next = bar(); //1
var final = next(); //2 //may not be captured in SCG
final(); //3 //may not be captured in SCG