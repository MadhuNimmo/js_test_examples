function foo() {
        foo = function () {
                return 3;
        };
        return 0;
}
foo(); //1
foo(); //1