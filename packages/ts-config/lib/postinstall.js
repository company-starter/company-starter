/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { update } = require('@company-starter/utils-config')

const { peerDependencies } = require('../package.json')

const { tsconfigJsonChanges, tsconfigBuildJsonChanges } = require('./changes')

update('package.json', { devDependencies: peerDependencies })
update('tsconfig.json', tsconfigJsonChanges)
update('tsconfig.build.json', tsconfigBuildJsonChanges)
