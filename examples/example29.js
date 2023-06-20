function getAnimal() {
        return this.get_anim(); //1
}
var myObj = {
        anim: "camel",
        get_anim: function () {
          return this.anim;
        },
};
getAnimal.call(myObj); //1 