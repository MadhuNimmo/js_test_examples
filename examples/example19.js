function Book(type, author) {
        this.type = type;
        this.author = author;
        this.getDetails = function () {
          return this.type + " written by " + this.author;
        };
}
var book = new Book("Fiction", "Peter King"); //1
book.getDetails(); //1