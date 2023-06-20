(function () {
        var fns = arguments;
        fns[0]["y"](); //1
})({
y: function () {
        return "y";
},
z: function () {
        return "z";
},
}); //1