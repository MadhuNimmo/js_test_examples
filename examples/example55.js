var user = {
        firstName: "John",
};

var x = function () {
        return this.firstName;
}.bind(this);
x(); //1 //may not be captured in SCG