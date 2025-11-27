import js from '@eslint/js';
import globals from 'globals';
import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/*.d.ts',
    '.next/**',
    'pnpm.lock.yaml',
    'tsconfig.json',
  ]),

  ...next,

  {
    ...js.configs.recommended,
    name: 'js-base',
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser },
  },

  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts}'],
  })),

  {
    name: 'react-ui',
    files: ['**/*.{jsx,tsx}'],
    plugins: { react: pluginReact },
    rules: {
      'react/react-in-jsx-scope': 'off',
      // 需要额外覆盖时在此添加
    },
  },

  {
    name: 'prettier',
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}'],
    plugins: { prettier: pluginPrettier },
    rules: { 'prettier/prettier': 'error', ...prettierConfig.rules },
  },
]);
