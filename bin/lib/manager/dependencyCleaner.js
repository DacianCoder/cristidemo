const {
  removeDepsAndScripts,
  moveDependenciesToDevDependencies,
  addToPackageJson,
} = require('../files')

module.exports = async (depsToRemove, scriptsToRemove) => {
  await removeDepsAndScripts(depsToRemove, scriptsToRemove)
  const excludedBuildSubsetDeps = [
    'cypress',
    '@stryker-mutator/core',
    '@stryker-mutator/jest-runner',
    '@stryker-mutator/typescript',
    '@types/jest',
    'prettier',
  ].filter((depToExclude) => !depsToRemove.includes(depToExclude))
  const excludedTestSubsetDeps = ['cypress'].filter(
    (depToExclude) => !depsToRemove.includes(depToExclude)
  )

  await addToPackageJson({
    subsets: {
      build: {
        exclude: excludedBuildSubsetDeps,
      },
      'test-simple': {
        exclude: excludedTestSubsetDeps,
      },
    },
  })
  await moveDependenciesToDevDependencies(
    '@stryker-mutator/core',
    '@stryker-mutator/core',
    '@stryker-mutator/jest-runner',
    '@stryker-mutator/typescript',
    '@testing-library/cypress',
    '@testing-library/jest-dom',
    '@testing-library/react',
    '@testing-library/user-event',
    '@types/jest',
    '@types/redux-mock-store',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'chalk',
    'clear',
    'cypress',
    'eslint-config-airbnb-typescript',
    'eslint-config-prettier',
    'eslint-config-react',
    'eslint-plugin-cypress',
    'eslint-plugin-import',
    'eslint-plugin-jsx-a11y',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'figlet',
    'inquirer',
    'mutationobserver-shim',
    'redux-devtools-extension',
    'redux-mock-store',
    'rimraf',
    'pretty-error',
    'pretty-error',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/node-logger',
    '@storybook/preset-create-react-app',
    '@storybook/react'
  )
}
