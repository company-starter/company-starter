import { update, copy, getParentFolder } from '@company-starter/utils'

import { packageJsonChanges } from './changes'

const parentFolder = getParentFolder()

if (parentFolder !== process.env.PWD) {
  update('package.json', packageJsonChanges)
  copy(__dirname, '.editorconfig')
  copy(__dirname, 'LICENSE')
}
