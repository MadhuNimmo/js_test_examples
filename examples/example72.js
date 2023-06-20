function isChecked() {
        eval("var evalFun = function(){ return \"evalFun\"} ");
        evalFun(); //1 //may not be captured in SCG
}
isChecked(); //1