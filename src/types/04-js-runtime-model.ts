/* eslint-disable */

interface IDetective {
  name: string;
  crimesSolved: number;
}

// You can improve readability by using a type alias for primitive types.
type TDetectiveId = number;

// Enroll a detective and return an ID
const enrollDetective = (detective: IDetective): TDetectiveId => {
  return api.enrollDetective({ name: detective.name });
};

const HerculePoirot = {
  name: 'HerculePoirot',
  crimesSolved: 100,
  extra: 22,
};

// In the JS world, as long as the parameter has the properties `name` and `crimesSolved`,
// the function `enrollDetective` will work fine. Since TS is modeled after JS runtime behavior,
// TS compiler will be happy as long as the parameter has those properties. It doesn't care about
// the additional properties. This is the key idea on top of which we can build intuition around
// the advanced TS types.
enrollDetective(HerculePoirot);

// Exception - excess property checking
const Sherlock: IDetective = {
  name: 'Sherlock',
  crimesSolved: 27,
  // Excess property checking kicks in only for object literals.
  // The rationale behind the decision is that when developers define a new object literal,
  // they want to enforce the type contract. Allowing extra props makes it impossible to catch typos.
  extra: 21,
};

// IGNORE EVERYTHING BELOW THIS LINE

// Ignore this imaginary MI6 API. This is only to stop tsc from yelling on line 13.
export var api = {
  enrollDetective: ({ name }: { name: string }) => {
    console.log(name);
    return 1;
  },
};
