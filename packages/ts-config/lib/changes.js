'use strict'

const tsconfigJsonChanges = {
  extends: '@company-starter/ts-config/lib/tsconfig.json',
  compilerOptions: {
    rootDir: '.',
    typeRoots: ['node_modules/@types']
  },
  exclude: ['node_modules', 'dist']
}

const tsconfigBuildJsonChanges = {
  extends: './tsconfig.json',
  compilerOptions: {
    baseUrl: './',
    outDir: './dist'
  },
  exclude: ['node_modules', 'dist', 'test']
}

module.exports = {
  tsconfigJsonChanges,
  tsconfigBuildJsonChanges
}
