'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const utils_1 = require('@company-starter/utils')

const package_json_1 = require('../package.json')

const changes_1 = require('./changes')
const parentFolder = utils_1.getParentFolder()
if (parentFolder !== process.env.PWD) {
  utils_1.update('package.json', {
    devDependencies: package_json_1.peerDependencies
  })
  utils_1.update('tsconfig.json', changes_1.tsconfigJsonChanges)
  utils_1.update('tsconfig.build.json', changes_1.tsconfigBuildJsonChanges)
}
//# sourceMappingURL=postinstall.js.map
