module.exports = {
  extends: [
    './rules/cypress',
  ].map(require.resolve),
  rules: {}
};