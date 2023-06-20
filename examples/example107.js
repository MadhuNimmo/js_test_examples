const double = (x) => {
  return x(); //2 //2 //2
};

double(function(){ return "x";}); //1
double.apply(this,[function(){ return "y";}]); //1
double.call(this,function(){ return "z";}) //1