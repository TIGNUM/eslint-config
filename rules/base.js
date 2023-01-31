module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: ['import', 'simple-import-sort', 'no-relative-import-paths'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue', '.yml', '.scss', '.ts', '.jsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['package.json', 'dist/'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'warn',
      {
        allowSameFolder: false,
        rootDir: 'src'
      }
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/no-named-as-default': 0,
    'no-unused-vars': 0
  }
}
