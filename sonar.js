module.exports = {
  extends: [
    './rules/sonar',
  ].map(require.resolve),
  rules: {}
};