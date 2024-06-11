import pluginJs from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import typescriptEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default [
  {
    ignores: ['dist/**', '.output/**', '.nuxt/**'],
  },
  {
    languageOptions: {
      globals: {
        $fetch: 'readonly',
        computed: 'readonly',
        nextTick: 'readonly',
        ref: 'readonly',
        useFetch: 'readonly',
        useCookie: 'readonly',
        useWebSocket: 'readonly',
        watch: 'readonly',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/strongly-recommended'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        sourceType: 'module',
        parser: {
          ts: typescriptEslint.parser,
        },
      },
    },
  },
  {
    rules: {
      'comma-dangle': ['error', {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'functions': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
      }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
];
