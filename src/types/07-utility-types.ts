/* eslint-disable */

type TDetective = {
  name: string;
  crimesSolved: number;
  apprentice?: string;
};

/**
 * Utility types
 * - Create a new type from existing type.
 */

/**
 * Partial<T> - Make all the properties of T optional.
 *
 * type Partial<T> = { [k in keyof T]?: T[k] };
 */
type TPartialDetective = Partial<TDetective>;

/**
 * Required<T> - Make all the properties of T required.
 *
 * type Required<T> = { [k in keyof T]-?: T[k] };
 */
type TRequiredDetective = Required<TDetective>;

/**
 * Readonly<T> - Make all the properties of T readonly.
 *
 * type Readonly<T> = { readonly [k in keyof T]: T[k] };
 */
type TReadonlyDetective = Readonly<TDetective>;

/**
 * Pick<T, K extends keyof T> - Create a new type by picking a set of properties from T.
 *
 * type Pick<T, K extends keyof T> = { readonly [k in K]: T[k] };
 */
type TPerson = Pick<TDetective, 'name'>;

/**
 * Omit<T, K extends keyof T> - Create a new type by omitting a set of properties from T.
 *
 * type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
 */
type TSoloDetective = Omit<TDetective, 'apprentice'>;

/**
 * Record<K, T> - Create a type that ensures that the properties in type K exist with a value of type T
 *
 * type Record<K, T> = { [key in K]: T }
 */
type TDetectivesRegister = Record<'sherlock' | 'poirot', TDetective>;

// A value of type TDetectivesRegister must have the properties `sherlock` and `poirot`.
// Record types are useful to ensure that all the values in an enum are handled.
const detectivesRegister: TDetectivesRegister = {
  sherlock: { name: 'Sherlock', crimesSolved: 27 },
  poirot: { name: 'Poirot', crimesSolved: 100 },
};

/**
 * Exclude<T, K> - Create a new type by removing the members of the union type K from the union type T.
 *
 * Domain(Exclude<T, K>) = Domain(T) - Domain(K) (Set substraction operation)
 *
 * Exclude vs Omit
 * Exclude operates on union types while Omit operates on object types
 */
type languages = 'French' | 'German' | 'Assamese' | 'Manipuri';
type indianLanguages = Exclude<languages, 'French' | 'German'>; // 'Assamese' | 'Manipuri'

/**
 * Extract<T, K> - Create a new type including only the members of the union type K from the union type T.
 *
 * // MDTODO: Fix this
 * Domain(Exctract<T, K>) = Domain(T) ∩ Domain(K)
 *
 * Exctract vs Pick
 * Exctract operates on union types while Pick operates on object types
 */
type europeanLanguages = Extract<languages, 'French' | 'German'>; // 'French' | 'German'
