module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": 'module',
  },
  "plugins": ['react', 'react-hooks', "@typescript-eslint"],
  "rules": {
    "indent": ["error", 2]
  },
  "settings": {
    "react": {
      "version": 'detect',
    },
  },
}
