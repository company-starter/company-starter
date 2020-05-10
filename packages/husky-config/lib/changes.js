'use strict'

const packageJsonChanges = {
  husky: {
    hooks: {
      // 'pre-commit': 'lerna run --parallel --stream precommit',
      // 'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      'pre-push': 'npm run test'
    }
  }
}

module.exports = {
  packageJsonChanges
}
