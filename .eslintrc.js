module.exports = {
    root: true,

    env: {
        node: true
    },

    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],

    parserOptions: {
        parser: 'babel-eslint'
    },

    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'vue/no-async-in-computed-properties': 'off',
        'vue/no-dupe-keys': 'off',
        'vue/no-duplicate-attributes': 'off',
        'vue/no-parsing-error': 'off',
        'vue/no-reserved-keys': 'off',
        'vue/no-shared-component-data': 'off',
        'vue/no-side-effects-in-computed-properties': 'off',
        'vue/no-template-key': 'off',
        'vue/no-textarea-mustache': 'off',
        'vue/no-unused-components': 'off',
        'vue/no-unused-vars': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/mustache-interpolation-spacing': 'off',
        'vue/name-property-casing': 'off',
        'vue/no-multi-spaces': 'off',
        'vue/no-spaces-around-equal-signs-in-attribute': 'off',
        'vue/prop-name-casing': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/v-bind-style': 'off',
        'vue/v-on-style': 'off',
        'vue/attributes-order': 'off',
        'vue/no-confusing-v-for-v-if': 'off',
        'vue/no-v-html': 'off',
        'vue/order-in-components': 'off',
        'vue/this-in-template': 'off',
        'vue/no-template-shadow': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/require-component-is': 'off',
        'vue/require-prop-type-constructor': 'off',
        'vue/require-render-return': 'off',
        'vue/valid-template-root': 'off',
        'vue/valid-v-bind': 'off',
        'vue/valid-v-cloak': 'off',
        'vue/valid-v-else-if': 'off',
        'vue/valid-v-else': 'off',
        'vue/valid-v-for': 'off',
        'vue/valid-v-html': 'off',
        'vue/valid-v-if': 'off',
        'vue/valid-v-model': 'off',
        'vue/valid-v-on': 'off',
        'vue/valid-v-once': 'off',
        'vue/valid-v-pre': 'off',
        'vue/valid-v-show': 'off',
        'vue/valid-v-text': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/html-closing-bracket-newline': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-end-tags': 'off',
        'vue/html-indent': 'off',
        'vue/html-quotes': 'off',
        'vue/html-self-closing': 'off',
        'vue/require-v-for-key': 'off',
        'vue/require-valid-default-prop': 'off',
        'vue/return-in-computed-property': 'off',
        'vue/use-v-on-exact': 'off'
    },

    'extends': [
        'plugin:vue/recommended',
        '@vue/standard'
    ]
}