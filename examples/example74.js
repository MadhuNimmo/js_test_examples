function main(){
        var x = function() { return 2; }
        var y = function(inp) { return inp();} //2
        var z = function(ans) { return ans(); } //2
        z(function(){y(x)}); //1 //1
}
main(); //1