const {
  getPathToFile,
  replaceLineWithPattern,
  removeReadmeSection,
} = require('../files')
const rimraf = require('rimraf').sync

module.exports = async (keepBoilerPlate) => {
  rimraf(getPathToFile('src', 'recoil'))
  await replaceLineWithPattern(
    getPathToFile('src', 'SetupWrapper.tsx'),
    'RecoilRoot'
  )

  if (keepBoilerPlate) {
    rimraf(getPathToFile('src', 'recoil', 'selectors', 'todoSelectors.ts'))
    rimraf(getPathToFile('src', 'recoil', 'atoms', 'todoAtoms.ts'))
    rimraf(getPathToFile('src', 'constants', 'todo.ts'))
  }
  await removeReadmeSection('Recoil', 2)

  return ['recoil']
}
