const path = require('path');

module.exports = {

  parser: 'babel-eslint',

  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended'],
  
  plugins: ['react', 'jsdoc', 'jsx-a11y'],

  rules: {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "react/no-find-dom-node": 1,
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": 2,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/interactive-supports-focus": 1,
    "jsx-a11y/label-has-for": [
      1,
      {
        "components": [
          "Label"
        ],
        "required": {
          "some": [
            "nesting",
            "id"
          ]
        },
        "allowChildren": true
      }
    ]
  },

  env: {
    "node": true,
    "browser": true,
    "es6": true,
    "jest": true,
    "jasmine": true
  },
  
  globals: {
    "__DEV__": true
  },

  settings: {
    'jsdoc': {
      tagNamePreference: {
        augments: "extends"
      }
    },
    'import/resolver': {
      alias: {
        map: [
          ['Client', path.resolve(__dirname, 'src/client/')],
          ['Server', path.resolve(__dirname, 'src/server/')],
          ['Assets', path.resolve(__dirname, 'src/assets/')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    }
  }

};