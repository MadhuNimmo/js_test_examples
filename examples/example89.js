function bar() {
        return;
}

function foo(f) {
        f(); //2
        bar(); //1
}

foo(bar); //1