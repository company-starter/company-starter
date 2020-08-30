import { update, getParentFolder } from '@company-starter/utils'

import { peerDependencies } from '../package.json'

import { tsconfigJsonChanges, tsconfigBuildJsonChanges } from './changes'

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', { devDependencies: peerDependencies })
  update('tsconfig.json', tsconfigJsonChanges)
  update('tsconfig.build.json', tsconfigBuildJsonChanges)
}
