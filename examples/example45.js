(function(){
  var x = [1,2,3]
  var y = Array.prototype.map.call(x,function (item){
          return item+1
  }) //2 //may not be captured in SCG
})() //1