function foo(x) {
        return x;
      }
function test() {
        try {
                foo(4); //1
                try {
                        foo(3); //1
                } finally {
                        foo(2); //1
                }
        } finally {
                foo(1); //1
        }
}
test(); //1