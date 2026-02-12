# Tignum eslint-config

This package provides Tignum .eslintrc as an extensible shared config.

This is used by our frontend projects to implement ESLint rules to have consistent code and follow good practices based on [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

## How to use

### @tignum/eslint-config

1. Install package

Our default export contains all of our ESLint rules, including EcmaScript 6+ and Vue. It requires eslint and eslint-plugin-vue.

```
pnpm add -D @tignum/eslint-config
```

2. Create config file .eslintrc and add

```
{
    "extends": "@tignum"
}

### @tignum/eslint-config/cypress

 Requires `eslint`.

1. `pnpm add --save-dev @tignum/eslint-config eslint-plugin-import eslint-plugin-cypress
 eslint`
2. add `"extends": "@tignum/eslint-config/base"` to your .eslintrc

### @tignum/eslint-config/sonar

Lints ES5 and below. Only requires `eslint`.

1. `pnpm add --save-dev @tignum/eslint-config eslint eslint-plugin-sonarjs`
2. add `"extends": "@tignum/eslint-config/sonar"` to your .eslintrc

```

### Prettier

Prettier is a high opinionated powerful automatic formatter. Eslinter is a code quality tool.
They can both live together but there are some compromises we have to do. We should disable
all the es-rules that are effecting the code formating and interfere with the prettier.

### How to update package

1. `npm run publish-pkg`

### Additional notes

- Make sure you add any additional rules and constants to `.eslintrc` that are specific to the project
- Make sure an `.eslintignore` is in place so that you target your eslint where needed
- **Note on Tailwind CSS**: `eslint-plugin-tailwindcss` was removed due to incompatibility with Tailwind CSS v4. The package still includes `prettier-plugin-tailwindcss` for class ordering. If you need ESLint rules for Tailwind, consider using the beta version `eslint-plugin-tailwindcss@4.0.0-beta.0` in your project, though it may have issues.
