/* eslint-disable */

/**
 * Type inference
 *
 * If a variable is not type annotated, the TS compiler infers its type.
 * Hover over the variable name to see its inferred type. This is a good way of learning how TS works.
 */

// Since const variables cannot be re-assigned, `tsc` narrows down its type to a literal type
// This is called type narrowing.
export const inferredType = 10; // Type limited to the numeric literal type 10.

// Since let variables can be re-assigned, `tsc` widens the type to a more generic one.
// This is called type widening.
export let widenedType = 'Type widened to string type';
// widenedType = 'skjlsdf'

// ==================================================================================

/**
 * Type assertion
 * (or 2 easy ways of becoming a detective)
 *
 * Tell `tsc` that despite the type inferred, you as a developer know better. A bit like the veto power.
 *
 * NOTE: Type assertions are escape hatches that should be sparingly used if there is no other choice.
 * In some cases type assertion is worse than not having a type at all because it gives false confidence
 * that everything is fine, but in reality it's not.
 */

interface IDetective {
  name: string;
  crimesSolved: number;
}

const enrollDetective = (detective: IDetective): void =>
  console.log(detective.name);

// This is how you become a false detective
const me = { crimesSolved: 0 } as IDetective;
enrollDetective(me); // Everything looks good here but `enrollDetective` wouldn't work as expected because `me` has no name.

// This is another way of becoming a false detective
const anEmptyObj = {};
// Everything looks good here but `enrollDetective` wouldn't work as expected because `anEmptyObj` has no name.
enrollDetective(<IDetective>anEmptyObj);

// ==================================================================================

/**
 * Non-null assertion operator (!) aka bang operator
 *
 * Used to assert that a value is non-null (not null or undefined). Use only when you're reasonably sure that a value is not null or undefined.
 * Otherwise, use conditional checks for null and undefined.
 *
 * Use case:
 * - Some of the APIs have required fields that are marked as optional. `!` is useful in that case.
 *
 * NOTE: If you're authoring an API, please don't mark the required fields as optional. Otherwise you need to either use `!` or add an unnecessary
 * null check in the UI codebase.
 */

export const enrollMaybeDetective = (maybeDetective?: IDetective): void => {
  console.log(maybeDetective.name); // throws `Object is possibly 'undefined'.`
  console.log(maybeDetective!.name); // Bang operator makes the compilation work, but the possibility of runtime error is still there.

  // correct way
  // narrow down the type using control flow based type analysis
  if (maybeDetective) {
    console.log(maybeDetective.name);
  }
};
