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

// var name = "Chadwick";

// {
//   console.log(name);
//   const name = "Rosie";
// }

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
