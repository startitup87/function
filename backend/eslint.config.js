import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      // Add or override rules here if needed
    },
  },
];
