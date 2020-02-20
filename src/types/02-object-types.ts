/* eslint-disable */

/**
 * - Objects in TypeScript are dictionaries (key-value pairs, maps)
 * - Functions and arrays are also first class objects
 * - Objects can be typed using an interface or a type expression.
 *
 * type vs interface
 * - `type` is more powerful than `interface`.
 * - Convention: Use `interface` for dictionaries and `type` for the rest.
 */
interface IDetective {
  name: string;
  crimesSolved: number;
}

type TDetective = {
  name: string;
  crimesSolved: number;
};

export const poirot1: IDetective = {
  name: 'Hercule Poirot',
  crimesSolved: 100,
};

export const poirot2: TDetective = {
  name: 'Hercule Poirot',
  crimesSolved: 100,
};

// A type can extend an interface through intersection type
export type TSuperDetective = IDetective & { kind: 'super' };

// An interface can extend a type
export interface ISuperDetective extends TDetective {
  kind: 'super';
}

// ==================================================================================

// ARRAYS

// not preferred because you cannot type immutable array in this syntax
export const detectives1: string[] = ['Poirot', 'Sherlock']; // string[] is equivalent to Array<string>

// Preferred because you can type both mutable arrays (Array<type>) and immutable arrays (ReadonlyArray<type>)
export const detectives2: ReadonlyArray<string> = ['Poirot', 'Sherlock']; // immutable array
export const detectives3: Array<string> = ['Poirot', 'Sherlock']; // mutable array

// Tuples
export const detectivesPair: [string, string, number] = [
  'Poirot',
  'Sherlock',
  1729,
];

// ==================================================================================

// FUNCTIONS - See ../features/00-functions.ts for a detailed explanation.

// 1. Inline parameter and return types - Not preferred because you cannot reuse the function type
var enrollDetective = (detective: IDetective): number => {
  return api.enrollDetective(detective);
};

// 2. Using type - most commonly used

// Define function type
type TEnrollDetective = (detective: IDetective) => number;
// Annotate a function using the type defined above
var enrollDetective: TEnrollDetective = detective => {
  return api.enrollDetective(detective);
};

// 3. Using interface - use if the function has its own properties

// Define function type
interface IEnrollDetective {
  (detective: IDetective): number;
  // This is the only way if the function has its own properties
  // Remember that functions are first class objects in JS. They can have properties like any other object.
  // someFunctionProperty: string;
}
// Annotate a function using the type defined above
var enrollDetective: IEnrollDetective = detective => {
  return api.enrollDetective(detective);
};

// ==================================================================================

// ENUMS

export enum IntelligenceAgencies {
  RAW = 'RAW',
  MOSSAD = 'MOSSAD',
  CIA = 'CIA',
  KGB = 'KGB',
  MI6 = 'MI6',
}

// ==================================================================================

// IGNORE EVERYTHING BELOW THIS LINE

// Ignore this imaginary MI6 API. This is only to stop tsc from yelling wherever we invoke api.enrollDetective.
var api = {
  enrollDetective: ({ name }: { name: string }) => {
    console.log(name);
    return 1;
  },
};

export default { api, enrollDetective };

const fn = (param1: string, param2: number): number => {
  // do something
  return 10;
};

type TArithmeticFn = (a: number, b: number) => number;
