function makeCounter() {
        var count = 0;
        return function () {
                return count++;
        };
}

var counter = makeCounter(); //1
counter(); //2
counter(); //2