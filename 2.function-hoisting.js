// Our Regular Code
// lines 4 and 14 are executable code.

/*
In the Compilation Stage -> We want to create a plan or blueprint or map for formal declarations and the scopes that they belong to.

In the Execution Stage -> first identifier then what it points to.

*/

book();
movie(); // typeError

function book() {
  console.log("The Great Gatsby");
}

var movie = function () {
  console.log("The Good, the Bad and the Ugly");
};
movie(); // NO Error

// The Hoisting Misconception

// function book() {
//   console.log("The Great Gatsby");
// }

// var movie;

// book();
// // movie(); // typeError

// movie = function () {
//   console.log("The Good, the Bad and the Ugly");
// };
// movie(); // NO Error
