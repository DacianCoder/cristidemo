const {
  getPathToFile,
  replaceLineWithPattern,
  removeAllFromRegexToRegex,
  removeReadmeSection,
} = require('../files')
const rimraf = require('rimraf').sync

module.exports = async (keepBoilerPlate) => {
  rimraf(getPathToFile('src', 'form', 'react-hook-form'))
  await replaceLineWithPattern('src/setupTests.ts', 'mutationobserver-shim')
  await removeReadmeSection('React Hook Form', 3)

  if (keepBoilerPlate) {
    rimraf(getPathToFile('src', '__tests__', 'form', 'ReactHookForm.test.tsx'))
  }

  return ['react-hook-form', 'mutationobserver-shim']
}
