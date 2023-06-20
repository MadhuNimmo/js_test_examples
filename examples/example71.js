function XYZ(){ return "XYZ"} 
function isChecked(argFun) {
        eval("argFun()"); //2
}
var result = isChecked(XYZ); //1