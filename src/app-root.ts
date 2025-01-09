// ! Do not move this file, it must be in the root of the project for __dirname to resolve correctly
// * Node.js does not have a built-in way to get the root directory of the project, so we need to set it manually
// * When using a bundler, __dirname will not work as expected in nested files so we need a consistent way to get the root directory
export const __appRoot = __dirname;
