require("babel-polyfill");

const context = require.context("../components", true, /.+\.test\.js$/);

context.keys().forEach(context);

module.exports = context;
