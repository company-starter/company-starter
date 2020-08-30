export const tsconfigJsonChanges = {
  extends: '@company-starter/ts-config/lib/tsconfig.json',
  compilerOptions: {
    rootDir: '.'
  },
  exclude: ['node_modules', 'dist']
}

export const tsconfigBuildJsonChanges = {
  extends: './tsconfig.json',
  compilerOptions: {
    outDir: 'dist'
  },
  exclude: ['node_modules', 'dist', 'test']
}
