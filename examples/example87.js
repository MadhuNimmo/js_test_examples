var arr=[1,2,3]
function foo(x){ return x}
function bar(args){
switch (args.length) {
        case 0: foo(args.length); return; 
        case 1:  foo(args.length); return;
        default:  foo(args.length); return; //1
      }
}
bar(arr) //1