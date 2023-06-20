function f1() { 
       return;
}
function p(y,z) { 
        y(); //2
        (z())(); //2 //3 
}
p(f1, ()=>f1) //1