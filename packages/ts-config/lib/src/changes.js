'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.tsconfigJsonChanges = {
  extends: '@company-starter/ts-config/lib/tsconfig.json',
  compilerOptions: {
    rootDir: '.'
  },
  exclude: ['node_modules', 'dist']
}
exports.tsconfigBuildJsonChanges = {
  extends: './tsconfig.json',
  compilerOptions: {
    outDir: 'dist'
  },
  exclude: ['node_modules', 'dist', 'test']
}
//# sourceMappingURL=changes.js.map
