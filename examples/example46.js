var arrayOfFunction = [ 
  function() { 
          return (function(){return "y"})
  }
] 
arrayOfFunction.pop()() //2 //may not be captured in SCG