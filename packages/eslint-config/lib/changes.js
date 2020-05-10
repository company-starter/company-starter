'use strict'

const packageJsonChanges = {
  scripts: {
    add: [
      {
        key: 'lint',
        value: 'eslint . --fix'
      }
    ],
    remove: [
      {
        key: 'format'
      }
    ]
  }
}

module.exports = {
  packageJsonChanges
}
