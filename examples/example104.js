function foo(arr1){
        for(var a1 of arr1){
                a1() //1 //may not be captured in SCG
        }
}
foo([function(){return "x"}]); //1
function bar(arr2){
        for(var a2 in arr2){
                arr2[a2]() //1 //may not be captured in SCG
        }
}
bar([function(){return "y"}]); //1 