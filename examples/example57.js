(function () {
        var obj = {
                foo: function (quote) {
                        return quote(); //2
                }
        }
        function bar() {
                return "bar called"
        }
        function main(o) {
                o["foo"](bar) //1
        }
        main(obj) //1
})() //1