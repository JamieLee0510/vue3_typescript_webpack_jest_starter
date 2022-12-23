/** @type {import('jest').Config} */

const { pathsToModuleNameMapper } = require('ts-jest');
const aliases = require('./tsconfig.alias.json');

module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript',
    //testEnvironment: 'jsdom', //  ReferenceError: document is not defined; Consider using the "jsdom" test environment.
    transform: {
        '^.+\\.vue$': 'vue-jest'
    },
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
        ...pathsToModuleNameMapper(aliases.compilerOptions.paths, {
            prefix: '<rootDir>/'
        })
    }
};
