module.exports = {
  // Indicates which environment to use for testing
  testEnvironment: "jsdom",

  // Match test files using a regular expression
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // Transform files before running tests
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // Module file extensions to look for
  moduleFileExtensions: ["js", "jsx", "json", "node"],

  // Setup files before running the tests
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
