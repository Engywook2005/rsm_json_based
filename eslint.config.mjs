import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  // Define the environments and language options
  {
    languageOptions: {
      globals: {
        ...globals.browser, // browser environment
        ...globals.node // node environment
      },
      ecmaVersion: 2021, // ES2021
      sourceType: 'module' // ES Modules
    },
    rules: {
      eqeqeq: ['error', 'always'] // Custom rule to enforce ===
      // Add other custom rules here
    }
  },
  // Include recommended rules from ESLint
  pluginJs.configs.recommended
];
