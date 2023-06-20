var handler = function (original) {
        return original;
};
var neon = function () {
        return "y";
};
var x = handler.apply(this, [neon]); //1
x(); //2 //may not be captured in SCG