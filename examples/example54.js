var user = {
        firstName: "John",
};
var x = function () {
        return this.firstName;
};
var funcUser = x.bind(user);
var y = funcUser;
y(); //2 //may not be captured in SCG
var z = funcUser;
z.apply(this); //2 //may not be captured in SCG