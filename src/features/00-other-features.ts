/* eslint-disable */

interface IDetective {
  name: string;
  crimesSolved: number;
}
const detective: IDetective = {
  name: 'Sherlock',
  crimesSolved: 27,
};

// ==================================================================================

/**
 * Template literal allows us to use variables in a string
 */
export const templateLiteral = `Hey ${detective.name}!`; // equivalent to writing "Hey" + detective.name + "!"; (string concatenation)

// ==================================================================================

/**
 * Optional chaining and nullish coalescing
 *
 * Optional chaining - safely read properties of maybe objects
 * Nullish coalescing - provide default values for null/undefined variables
 */
export const enrollMaybeDetective = (detective?: IDetective): void => {
  // `detective` can be undefined here - you can't access properties of undefined
  var name = detective.name;
  var crimesSolved = detective.crimesSolved;
  // Optional chaining to the rescue. Ignore the syntactic errors here. Optional chaining and nullish coalescing was introduced
  // in a recent version of TS. This editor is using a older version of TS.
  name = detective?.name; // If detective exists, returns detective.name, otherwise returns `undefined`
  crimesSolved = detective?.crimesSolved;
  // Nullish coalescing - If the value is undefined or null, return the default value
  name = detective?.name ?? 'Sherlock';
  // e.g. name = null ?? 'Sherlock'; // returns 'Sherlock'
  name = 'Poirot' ?? 'Sherlock'; // returns 'Poirot'
};

// ==================================================================================

/**
 * Default parameter
 *
 * You can optionally specify a default value for an optional parameter. The default parameter kicks in only if the parameter is undefined.
 * If you set a default value, that parameter is considered as optional.
 */

export const parseInt = (value: unknown, base: number = 10): number => {
  // Do something and return 10 anyway
  return 10;
};

parseInt('10');

// ==================================================================================

/**
 * Destructuring
 *
 * Extracting properties from objects or arrays
 */

const { name, crimesSolved } = detective; // Object destructuring
const [firstNumber, secondNumber] = [1, 2]; // Array destructuring

// Destructuring function parameters
export function enrollDetective({ name, crimesSolved }: IDetective): void {
  console.log(name, crimesSolved);
}

// The above is equivalent to
export function enrollDetectiveExpanded(detective: IDetective): void {
  const { name, crimesSolved } = detective;
  console.log(name, crimesSolved);
}

// ==================================================================================

/**
 * Spread and rest operators
 *
 * Spread operator - expand object properties or array values
 * Rest operator - gather a bunch of values into an object or an array
 */

// Spread operator
export const array1 = [1, 2];
export const array2 = [...array1, 3, 4];

export const obj1 = { prop1: 1, prop2: 2 };
// While using spread operator, if the keys are same, the latest one wins.
export const obj2 = { ...obj1, prop1: 3, prop3: 4 }; // prop1 = 3
export const obj3 = { prop1: 3, prop3: 4, ...obj1 }; // prop1 = 1

// Rest operator
const [val1, ...restOfTheArray] = [1, 2, 3];
const { prop1, ...restOfTheObj } = { prop1: 1, prop2: 2 };

/**
 * How to tell whether `...` is spread operator or rest operator?
 *
 * If it is on the RHS of the assignment operation - spread operator
 * If it is on the LHS of the assignment operation - rest operator
 */

// ==================================================================================
