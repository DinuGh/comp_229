
// // function hello(){
// //     document.getElementById("demo").innerHTML += "Hello world!";
// // }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// var hello;
// hello = () => {
//     document.getElementById("demo").innerHTML += "Hello world!"; 
//     //same as "function hello()" from above, row 2
// }

// // A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// document.getElementById("btn").addEventListener("click",  () => {
//     document.getElementById("demo").innerHTML += "Hello world!"; 
//     // We placed instead of 'hello' the arrow function(lamda) see row 14
//     // The entire code can be commented for the exception of this 'arrow function', and it will work
// });
//// ========================================================================

// var numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(n => n * n);
// document.write(squares);

// document.write("<br>");

// var evens = new Array();
// numbers.forEach(n => {
//     if (n % 2 === 0) {
//         evens.push(n);
//     }
// })
// document.write(evens);

//===============================

const author = {
    fullName: "Bob Alice",
    books: ["Book 1", "Book 2", "Book 3"],

    printBooks() {
        this.books.forEach(book => document.write(book + ' by ' + this.fullName + '<br>'));
    },

    printBooks1() {
        function printValue(book) {
            document.write(book + ' by ' + this.fullName + '<br>'); // Undefined expected for fullname
        }
        this.books.forEach(printValue);
    },

    printBooks2() {
        this.books.forEach(function (book) {
            document.write(book + ' by ' + this.fullName + '<br>'); // Undefined expected for fullname
        });
    }
}

author.printBooks();
author.printBooks1();
author.printBooks2();