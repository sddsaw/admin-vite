/*
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-06-12 10:39:31
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-13 20:19:33
 * @FilePath: /admin-vite/stylelint.config.js
 * @Description: 统一css风格配置
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved.
 */
module.exports = {
  root: true,
  plugins: ['stylelint-prettier'],
  extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-recommended-vue'],
  // https://stylelint.docschina.org/user-guide/rules/
  customSyntax: 'postcss-html',
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'number-leading-zero': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
  }
}
