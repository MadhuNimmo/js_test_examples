var obj={
        foo: function(){return "foo"},
        bar: function(){return "bar"}
}
function y(x){
        x = x
        x(); //2 
}
y(obj["bar"]) //1