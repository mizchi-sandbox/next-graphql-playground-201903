module.exports = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**", "!**/.next/**"],
  globals: {
    "ts-jest": {
      tsConfig: "jest.tsconfig.json"
    }
  },
  testRegex: "(/__tests__/.*|(\\.|/))test\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
