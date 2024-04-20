// module.exports = {
//     testMatch: [
//         "<rootDir>/test/*.test.js"
//     ],
//     transform: {
//         "^.+\\.[t|j]sx?$": "babel-jest"
//       },
// }

// jest.config.js
export default {
    transform: {},
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    moduleNameMapper: {
      // map your imports if necessary
    }
  };
  