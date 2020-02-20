/* eslint-disable */

type TDetective = {
  crimesSolved: number;
};

type TMusician = {
  songsComposed: number;
};

/**
 * Intersection type
 *
 * Combines multiple types into one - an object of this type will have all the members of the constituent types.
 */

type TDetectiveMusician = TDetective & TMusician;

/**
 * We tend to think that TDetectiveMusician will contain no properties because there are no common properties between TDetective and TMusician.
 * But type operations work on the values of the types (Domain of the type), not the properties of types.
 *
 * Thinking in terms of the Domains of types,
 *
 * Domain(TDetectiveMusician) = Domain(TDetective) ∩ Domain(TMusician)
 *
 * Considering that JS follows duck-typing and TS compiler is modeled after JS runtime,
 *
 * Domain(TDetective) = {all the objects that have the property `crimesSolved` (additional properties are allowed)}
 * Domain(TMusician) = {all the objects that have the property `songsComposed` (additional properties are allowed)}
 *
 * Domain(TDetectiveMusician) = {all the objects that have the properties `crimesSolved` and `songsComposed` (additional properties are allowed)}
 *
 * keyof T & U = keyof T ∪ keyof U
 *
 * The values in the domain of an intersection type contain the union of properties of each of its constituents.
 */

export const sherlock: TDetectiveMusician = {
  crimesSolved: 27,
  songsComposed: 1,
};

// keyof operates on a type - returns the union of the keys of a type
export type TDetectiveMusicianKeys = keyof TDetectiveMusician; // "crimesSolved" | "songsComposed"
// typeof operates on a value - returns the type of the value
// This is useful when you want the type of an imported variable
export type TDetectiveMusicianType = typeof sherlock; // {crimesSolved: number; songsComposed: number;}

// ==================================================================================

/**
 * Union type
 *
 * Useful for variables that can have multiple types of values.
 */

type TDetectivesAndMusiciansClub = TDetective | TMusician;

/**
 * We tend to think that TDetectivesAndMusiciansClub will contain all the properties of TDetective and TMusician.
 * But type operations work on the values of the types (Domain of the type), not the properties of types.
 *
 * Thinking in terms of the Domains of types,
 *
 * Domain(TDetectivesAndMusiciansClub) = Domain(TDetective) ∪ Domain(TMusician)
 *
 * Considering that JS follows duck-typing and TS compiler is modeled after JS runtime,
 *
 * Domain(TDetective) = {all the objects that have the property `crimesSolved` (additional properties are allowed)}
 * Domain(TMusician) = {all the objects that have the property `songsComposed` (additional properties are allowed)}
 *
 * Domain(TDetectivesAndMusiciansClub) = {all the objects that have at least one of the properties
 * `crimesSolved` and `songsComposed` (additional properties are allowed)}
 *
 * keyof T | U = keyof T ∩ keyof U
 */

const poirot: TDetectivesAndMusiciansClub = {
  crimesSolved: 27,
  songsComposed: 24,
};

// MDTODO: Add a section on type guards
// MDTODO: Index signature

// type PropertyIntersection<
//   T,
//   U,
//   Y extends keyof T & keyof U = keyof T & keyof U
// > = Pick<T, Y> | Pick<U, Y>;

// const saa: PropertyIntersection<soem, sjkfls, 'l'> = {
//   name: 'name',
//   kind: 'sjkfds'
// };
