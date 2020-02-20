/* eslint-disable */

/**
 * Functions
 *
 * - Functions are first class objects in TS. They can have properties and methods just like any other object.
 * - Because they are first class objects, they can be passed as arguments to another function or returned from a function.
 */

// Function declaration - inline types for parameters and return value
function tell(person: string, num: number): void {
  // I don't know why anyone would give a number to a person, but I'm out of ideas now.
  console.log(`Hey ${person}, here is a number for you: ${num}`); // This kind of string is called a `template literal`
}
// When you take parameters sequentially, the order of arguments matters during invocation
tell('Ramanujan', 1729);
// Changing the order of arguments would lead to errors. When a function takes too many parameters, remembering their order is painful.
tell(1729, 'Ramanujan');

// You can avoid the trouble of remembering the order of parameters by using an object as paramater
// Function types can be used only with function expressions
type ITellFn = (params: { person: string; num: number }) => void;

// Anonymous function expression
const tellFnExprAnonymous: ITellFn = function({ person, num }) {
  console.log(`Hey ${person}, here is a number for you: ${num}`);
};

// Using an object as a parameter in the type `ITellFn` makes this function invocation more readable
// and independent of the order of values.
tellFnExprAnonymous({ num: 1729, person: 'Ramanujan' });

// Named function expression (the only difference is the function on the RHS now has a name)
const tellFnExpr: ITellFn = function fnNameForDebugging({ person, num }) {
  console.log(`Hey ${person}, here is a number for you: ${num}`);
};

// Arrow functions - anonymous function expression
const arrowFn: ITellFn = ({ person, num }) => {
  return console.log(`Hey ${person}, here is a number for you: ${num}`);
};

// Arrow functions implicity return value if you don't use brackets for the function body
const double = (x: number): number => 2 * x;
// The above is equivalent to writing const double = (x: number): number => {return 2 * x;};
