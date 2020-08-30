export const eslintrcJsonChanges = {
  extends: '@company-starter/eslint-config'
}

export const packageJsonChanges = {
  scripts: {
    lint: 'eslint . --fix',
    format: undefined
  }
}
