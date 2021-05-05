module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    'pre-commit': 'pnpm lint',
    'pre-push': 'pnpm lint'
  }
}