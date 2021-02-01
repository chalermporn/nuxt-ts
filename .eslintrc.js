module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    indent: ['error', 2, {
      VariableDeclarator: 1
    }],
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/html-indent': ['error', 2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never'
    }],
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'vue/max-attributes-per-line': [2, {
      singleline: 4,
      multiline: {
        max: 7,
        allowFirstLine: true
      }
    }],
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-template-shadow': 'off',
    'vue/prop-name-casing': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'brace-style': 'off',
    eqeqeq: 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off'
    // 'no-eval':[0]
  }
}
