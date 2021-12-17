// https://www.ecma-international.org/ecma-262/

/*
Lexical Declaration -> let bindingIdentifier(lexicalBinding) = AssignmentExpression

Lexical Declaration -> const bindingIdentifier(lexicalBinding) = AssignmentExpression
*/

/*
var -> originally it is in an undefined state

let/const -> originally in an uninitialized state
*/

//------------------- Proof of hoisting of let and const

// var book = "One Hundred Years of Solitude";

// {
//   console.log(book);
//   let movie = "Black Panther";
// }

// var name = "Chadwick";

// {
//   console.log(name);
//   let name = "Rosie";
// }

var name = "Chadwick";

{
  // console.log(name);
  const name = "Rosie";
  console.log(name);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

// const number;

// number = 1;
// number = 2;

// console.log(number);

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// compilation and execution

// or

// parsing and execution

/*
First, the variable is declared, then it is initialized when it is assigned a value through an expression
*/

/* 

let booger;
const boobie;

they are declared but uninitialized

let booger = "poopie";
const boobie = 2;

they are now both declared and initialized

var dumbass;

the var starts off as undefined

var dumbass = "joe mamma";

the var is now defined

*/
