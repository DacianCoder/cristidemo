const { getPathToFile, moveAllFiles, replaceRegex } = require('../files')
const rimraf = require('rimraf').sync

module.exports = {
  removeMUI: async (keepStory) => {
    // todo add other MUI settings to remove here
    rimraf(getPathToFile('src', 'form', 'final-form', 'atoms', 'mui'))
    rimraf(getPathToFile('src', 'form', 'react-hook-form', 'atoms', 'mui'))
    if (!keepStory) {
      rimraf(
        getPathToFile('src', 'form', 'final-form', 'FinalFormMUI.stories.tsx')
      )
      rimraf(
        getPathToFile(
          'src',
          'form',
          'react-hook-form',
          'ReactHookMUI.stories.tsx'
        )
      )
    }
    return [] //deps MUI
  },
  replaceDefaultWithMUI: async () => {
    await replaceRegex(
      getPathToFile(
        'src',
        'form',
        'react-hook-form',
        'ReactHookMUI.stories.tsx'
      ),
      '/mui/',
      '/'
    )
    await replaceRegex(
      getPathToFile('src', 'form', 'final-form', 'FinalFormMUI.stories.tsx'),
      '/mui/',
      '/'
    )
    await moveAllFiles(
      getPathToFile('src', 'form', 'react-hook-form', 'atoms', 'mui')
    )
    await moveAllFiles(
      getPathToFile('src', 'form', 'final-form', 'atoms', 'mui')
    )

    return []
  },
}
