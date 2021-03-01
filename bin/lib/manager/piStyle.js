const { getPathToFile, replaceLineWithPattern } = require('../files')
const rimraf = require('rimraf').sync

module.exports = async (keepStory) => {
  rimraf(getPathToFile('src', 'assets', 'styles'))
  await replaceLineWithPattern(
    getPathToFile('src', 'SetupWrapper.tsx'),
    'style.scss'
  )
  if (!keepStory) {
    rimraf(getPathToFile('src', 'form', 'final-form', 'FinalForm.stories.tsx'))
    rimraf(
      getPathToFile('src', 'form', 'react-hook-form', 'ReactHook.stories.tsx')
    )
  }
  return ['node-sass']
}
