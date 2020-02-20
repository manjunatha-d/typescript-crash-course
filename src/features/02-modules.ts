/* eslint-disable */

/**
 * A module must:
 * - have a private scope (all the variables declared within that module should be confied to that module, unless exported)
 * - specify other modules as dependencies (import statements) or let other modules use this as a dependency (export statements)
 */

// default imports
import React from 'react';

// named imports
import { useState, useEffect } from 'react';

// default exports
const log = (message: string): void => console.log(message);
export default log;

// named export
export const NAMED_CONSTANT = 1729;
export const ANOTHER_NAMED_CONSTANT = 1.618;

/**
 * Package - collection of one or more modules with a package.json that contains metadata about that package.
 *
 * Package managers - yarn and npm
 */
