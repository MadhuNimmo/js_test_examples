(function () {
        var user = {
          firstName: "John",
          fullName: function () {
            return this.firstName;
          },
        };
      
        function func() {
          return this.fullName;
        }
        var funcUser = func.bind(user); 
        var newFullName = funcUser(); //2 //may not be captured in SCG
        newFullName(); //3 //may not be captured in SCG
})(); //1