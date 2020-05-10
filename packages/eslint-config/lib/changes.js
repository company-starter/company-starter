'use strict'

const changes = {
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
  changes
}
