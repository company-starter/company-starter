import { update, remove, getParentFolder } from '@company-starter/utils'

import { peerDependencies } from '../package.json'

import { packageJsonChanges, eslintrcJsonChanges } from './changes'

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', [
    packageJsonChanges,
    { devDependencies: peerDependencies }
  ])
  update('.eslintrc.json', eslintrcJsonChanges)
  remove('.prettierrc')
}
