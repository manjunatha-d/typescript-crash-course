/* eslint-disable */

/**
 * Generic types - equivalent of functions for types
 * - Similar to functions that help to keep the logic DRY, generic types keep the types DRY.
 */

// Pair of any type of value
type Pair<T> = [T, T];
const pairOfNumbers: Pair<number> = [0, 0];

/**
 * Constraining the type of parameters in a generic function.
 * In a function we can contrain the parameters to specific types, how can achieve the same for generic types?
 *
 * Use `extends` to constrain the type of parameter in a generic function.
 * Think of `extends` as `subtype of`.
 */
interface IDetective {
  name: string;
  crimesSolved: number;
}

interface ISuperDetective extends IDetective {
  kind: 'super';
}

type TDetectivePair<T extends IDetective> = [T, T];

// You can't pass a type that is not a subtype of IDetective
const wontwork: TDetectivePair<number> = [];

// Only a subtype of `IDetective` is accepted
const detectivePair: TDetectivePair<IDetective> = [
  { name: 'Sherlock', crimesSolved: 27 },
  { name: 'Poirot', crimesSolved: 100 },
];

// This is okay because `ISuperDetective` is a subtype of `IDetective`
const superDetectivePair: TDetectivePair<ISuperDetective> = [
  { name: 'Sherlock', crimesSolved: 27, kind: 'super' },
  { name: 'Poirot', crimesSolved: 100, kind: 'super' },
];
