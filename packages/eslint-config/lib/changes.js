'use strict'

const eslintrcJsonChanges = {
  extends: '@company-starter/eslint-config'
}

const packageJsonChanges = {
  scripts: {
    lint: 'eslint . --fix',
    format: undefined
  }
}

module.exports = {
  eslintrcJsonChanges,
  packageJsonChanges
}
