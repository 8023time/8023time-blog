/** @type {import('lint-staged').Config} */
const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  'package.json': ['prettier --write'],
  '*.{css,scss,postcss,less}': ['prettier --write'],
  '*.md': ['prettier --write'],
};

export default config;
