var obj = {
        foo: function (bar) {
                return bar(); //2
        },
};
obj.foo(function () {
        return "y";
}); //1