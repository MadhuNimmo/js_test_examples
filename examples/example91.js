var func = new Function("return " + "function () { return 'xyz'; }")(); //1 //may not be captured in SCG
func() //2 //may not be captured in SCG