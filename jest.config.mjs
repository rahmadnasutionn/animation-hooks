import nextJs from 'next/jest.js';

const createJestConfig = nextJs({
  dir: './'
});

const customJestConfig = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["./jest.setup.js"],
};

export default createJestConfig(customJestConfig);