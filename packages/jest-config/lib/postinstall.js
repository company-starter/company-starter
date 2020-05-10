/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { update } = require('@company-starter/utils-config')

const { packageJsonChanges } = require('./changes')

update('package.json', packageJsonChanges)
