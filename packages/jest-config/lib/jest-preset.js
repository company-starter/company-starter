module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'html'],
  testRegex: '^.+.test.(j|t)sx?$',
  transform: {
    '^.+\\.(j|t)s$': 'ts-jest'
  },
  testEnvironment: 'node'
}
