var obj = {
        foo: function () {
                var func;
                (function () {
                        if (func == undefined) {
                                func = function () {
                                        return "1";
                                };
                        }
                        func(); //1
                })(); //1
        },
};
obj.foo(); //1