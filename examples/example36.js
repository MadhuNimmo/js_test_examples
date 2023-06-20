(function () {
        function y() {
                return arguments[0](); //2 //may not be captured in SCG
        }
        (function x() {
                y(arguments[0]); //1
        })(function () {return "args";}); //1
})(); //1