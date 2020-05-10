/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { update, getParentFolder } = require('@company-starter/utils-config')

const { tsconfigJsonChanges, tsconfigBuildJsonChanges } = require('./changes')

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('tsconfig.json', tsconfigJsonChanges)
  update('tsconfig.build.json', tsconfigBuildJsonChanges)
}
