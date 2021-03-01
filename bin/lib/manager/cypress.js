const { GITLAB_CI } = require('../constants')
const {
  getPathToFile,
  replaceLineWithPattern,
  replaceRegex,
  removeReadmeSection,
} = require('../files')
const rimraf = require('rimraf').sync

module.exports = async () => {
  rimraf('cypress.json')
  rimraf('cypress')
  await removeReadmeSection('E2E', 3)
  await replaceLineWithPattern(
    getPathToFile('src', 'SetupWrapper.tsx'),
    '\n.*\n.*\n$'
  )
  await replaceLineWithPattern(GITLAB_CI, '- cache/Cypress')
  await replaceLineWithPattern(GITLAB_CI, 'CYPRESS_CACHE_FOLDER')
  await replaceRegex(GITLAB_CI, /\nE2E Tests:[\s\S]*?(?=\n\n)/, '')

  return [['cypress'], ['start-ci', 'cy:open', 'test:e2e', 'test:e2e:ci']]
}
