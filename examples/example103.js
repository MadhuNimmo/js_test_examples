function foo(fooarg){
        fooarg[0](); //1 //may not be captured in SCG
}
foo([function x(){ return "x"}]); //1