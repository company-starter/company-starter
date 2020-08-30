import { update, getParentFolder } from '@company-starter/utils'

import { peerDependencies } from '../package.json'

import { packageJsonChanges } from './changes'

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', [
    packageJsonChanges,
    { devDependencies: peerDependencies }
  ])
}
