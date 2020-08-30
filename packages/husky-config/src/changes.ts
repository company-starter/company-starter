export const packageJsonChanges = {
  husky: {
    hooks: {
      'pre-push': 'npm run test'
    }
  }
}
