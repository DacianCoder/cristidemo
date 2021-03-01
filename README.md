# IMPORTANT -Initial Project Setup!

In the root of the project please run 
- `node bin/dependency_trim.js` -> one time use
- Configure the optional dependencies
- Assure everything still works fine and commit your options in a single commit 

# This project was bootstrapped with Pitech [template](https://gitlab.pitechplus.com/cristian.boza/cra-template-pi).

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn test:e2e` - launches app on port `3099` and starts the E2E environment.

- `yarn test:mutation` - launches the test runner and applies mutations on written code.

- `yarn lint` - lints project files according to eslint rules

- `yarn lint:fix` - same as `yarn lint`, but also fixes errors, when possible. Typical use case: local development environment, git hooks.

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.

## Recoil EXPERIMENTAL

Basic Global state management configuration with Recoil.js. Read more [here](https://recoiljs.org/) 

## IMPORTANT: Form Solutions

### Final Form [project](https://final-form.org/react)
Basic implementation contains a [FormWrapper](/src/form/final-form/FormWrapper.tsx) that should be used to declare a form  
A TextField, CheckboxField and ConditionField is provided by default
A set of validators is also provided within the final-form directory

## Testing

### E2E
[Cypress](https://docs.cypress.io/api/api/table-of-contents.html)
is the default library for e2e testing, contains a minimal setup.  
For running the integration setup tests locally:
 - start application on port 3000(see [cypress.json](./cypress.json))
 - run any of:  
   - `npm run cy:open` (user interface)
   - `npm run test:e2e` (command line)

#### Updating cypress version

To update cypress version first you must change the version in the `package.json`, make sure to leave
it fixed to prevent upgrading by mistake. You will also have to change the docker image on which the CI
is running as it is fixed. The default one is hardcoded version taken from the cra-template-pi repo
registry. To build a new image do the following:

1. Build image for the new version, make sure to use your own repo for the tag and set the $VERSION:
  ```bash
  docker build -t "registry.pitechplus.com/$YOUR_PROJECT_PATH/cypress:$VERSION" docker/ -f docker/Dockerfile-cypress --build-arg VERSION=$VERSION
  ```
2. Push the tag and update the `image: ` in the `E2E` job in `.gitlab-ci.yml`
  ```bash
  docker push registry.pitechplus.com/$YOUR_PROJECT_PATH/cypress:$VERSION
  ```

### Unit and integration testing
[React Testing library](https://testing-library.com/docs/react-testing-library/api) is used in this case.
Use `npm run test` or `npm run test:coverage` for running tests.  
There is already a [test](/src/__tests__) and [mock](/src/__mocks__) folder set with
 basic tests for the [Counter](/src/components/counter/Counter.tsx) component. In 
the mock folder you will also find a [wrappers](/src/__mocks__/wrappers.tsx) file
that contains some helper function to wrap your components with Redux and Intl 
providers.

## Internationalization

Translations is provided using React Intl.  
Also a [DynamicFormattedMessage](src/components/common/DynamicFormattedMessage.tsx) 
component is provided to wrap the intl import and provide conditional rendering of the text

## [Prettier](https://prettier.io/)

`Prettier` is added to force consistent formatting. Don't like trailing semicolons? Feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside `.prettierrc` file to match your code style.

## Eslint configurations

The template extends CRA ESLint rules with a custom set, tailored for the reasonable and clean development process.

Eslint rules are commented for your convenience feel free to tweak or remove them inside `.eslintrc`  
Import order not configured, a plugin can be found [here](https://www.npmjs.com/package/eslint-plugin-ordered-imports) 

## Styling [docs](./src/assets/styles/README.md).
