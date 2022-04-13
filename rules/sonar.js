module.exports = {
  plugins: ['sonarjs'],
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sonarjs/prefer-single-boolean-return': 'off',
    'sonarjs/cognitive-complexity': ['error', 40]
  }
}
