function bar() {
return [
        function () {
        return 0;
        },
        function () {
        return 1;
        },
];
}
var foo = function () {
        return new bar()[0]; //1
};
foo()(); //1 //2