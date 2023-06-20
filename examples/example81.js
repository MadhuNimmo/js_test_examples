var obj = {
        x: "xyz",
};
function bar(i) {
        return i;
}

function foo() {
        loop1: for (el in obj) {
                y = bar(el); //1
        }
}
foo(); //1