/* eslint-disable */

/**
 * Why TypeScript (TS)?
 *
 *  Using TS is an overhead for developers because of all the type annotations. Why is it worth it?
 *
 * - JavaScript (JS) doesn't scale. It's hard to build a large scale application in JS because of its dynamic types.
 * - Catch runtime errors during compilation.
 * - Easy to refactor large scale applications.
 * - Amazing developer experience (DX) compared to JS - autocomplete, inline error reporting, code navigation, etc
 * - Usually each library will have a types file with documentation - use it as a quick reference.
 * - TS can be customized through flags (See tsconfig.json). We can make it as strict or as loose as we want.
 */

/**
 * Mental model:
 * Domain of a type = A set of all the values assignable to a variable of that type.
 * e.g. for boolean type, domain = {true, false}
 * Thinking in terms of domains of types helps in reasoning about type operations
 * when we get to the advanced types.
 *
 * TypeScript compiler (`tsc`) performs two independent tasks:
 * 1. Type checking - checks if Domain(type of RHS of the expression) <: Domain(type of LHS of the expression)
 * 2. Compile the TS code to JS code.
 *
 * Since these tasks are independent, the TS code gets compiled to JS code even if there are type errors. This is a deviation
 * from other statically typed languages.
 */

// ==================================================================================

/**
 * BOTTOM TYPE: never
 * 1. Domain = empty set
 * 2. No values are assignable to a variable of this type
 * 3. Subtype of all the types
 * 4. Use case - function that throws an error
 */
export const aFnThatRandomlyThrows = (): number | never => {
  if (Math.random() < 0.5) {
    throw new Error('A beautiful Hemingwayish error message');
  }

  return Math.random() * 100;
};

// ==================================================================================

/**
 * TOP TYPE: any (type unsafe), unknown (type safe)
 * 0. Universal set - All the values are assignable to `any` and `unknown`
 * 1. Used to describe the type of variables that we do not know when we are writing an application.
 */

/**
 * `any`
 * - Disables type checking for those variables
 * - Useful when you're migrating an existing JS project to TS
 * - `any` is evil. Avoid using that.
 */
export const notSureAboutType: any = 4;
// Compilation passes. App crashes. Evil laugh - Satan.
notSureAboutType.nonExistentMethod();

/**
 * `unknown`
 * - Type safe counterpart of `any`
 * - Doesn't allow any operation on the value until you narrow down the type
 */
export const unknownVar: unknown = 4;
unknownVar.nonExistentMethod();

// Narrow down the type - using type assertion (Avoid this)
(unknownVar as { nonExistentMethod: () => void }).nonExistentMethod();

// Control flow based type narrowing
export const stringifyForLogging = (value: unknown): string => {
  if (typeof value === 'function') {
    // Within this branch, `value` has type `Function`,
    // so we can access the function's `name` property
    const functionName = value.name || '(anonymous)';
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // Within this branch, `value` has type `Date`,
    // so we can call the `toISOString` method
    return value.toISOString();
  }

  return String(value);
};

// ==================================================================================
