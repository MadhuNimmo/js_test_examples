const greet = () => {
        console.log("Hello!");
      };
      
greet(); //1

const double = (x) => {
        return x(); //2
      };
      
double(function(){ return "x";}); //1

const sum = (a, b) => a + b;

sum(3, 4); //1

const greetPerson = (name = function(){ return "name"}) => {
       name(); //2
      };
      
greetPerson(); //1
greetPerson(function(){ return "name2"}); //1

const applyOperation = (operation, ...numbers) => {
        return numbers.reduce((acc, num) => operation(acc, num), 0); //2
};
      
const add = (a, b) => {
        return a + b;
};

applyOperation(add, 2, 3, 4) //1