/* eslint-disable */

/**
 * UNIT TYPE - null, undefined, void, literal types
 * 1. Domain = a set with just one member
 * 2. Not very useful on their own. More useful as union of literal types.
 */
export const aNull: null = null;
export const anUndefined: undefined = undefined;
// The domain of void and undefined types is the same = {undefined}
// Use `void` for functions that don't return any value
// Use `undefined` for optional fields in an object
export const log = (): void => console.log('Some message');

// const PI: 3.14  = 10;

export const aStringLiteral: 'A' = 'A';
export const aNumericLiteral: 10 = 10;
// real world use case for union of literal types
export const buttonTheme: 'primary' | 'secondary' = 'primary';

// ==================================================================================

/**
 * Other primitive types
 */

// Domain = {integers and floating point numbers less than 2^53 - 1}
export const aNumber: number = 2.34;
// Domain = {integers greater than 2^53 - 1} (Note that they end with `n`)
export const aBigInt: bigint = 298349203849238402984903n;
// Domain = {single quoted strings, double quoted strings, template literals}
export const aString: string = 'Rubrik';
// Domain = {true, false}
export const aBoolean: boolean = true;

// ==================================================================================
