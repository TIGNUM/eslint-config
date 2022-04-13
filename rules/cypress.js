module.exports = {
  plugins: ['cypress'],
  extends: ['plugin:cypress/recommended'],
  rules: {
    'cypress/no-unnecessary-waiting': 'warn'
  }
}
