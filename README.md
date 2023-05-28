
### 安装pnpm 
  1.npm i pnpm -g
  2.pnpm config get registry //查看源
  3.pnpm config set registry https://registry.npm.taobao.org //切换淘宝源 
### 使用vite创建项目
  1. pnpm create vite
### 安装eslint 
  1. pnpm add eslint --save-dev
  2.初始化eslint配置 pnpx eslint --init
  3.使用standardjs代码风格库 文档：https://standardjs.com/readme-zhcn.html
  4.如何看到不符合规范的错误提示,并且按照项目中的ESlint规则要求进行格式化
    4.1 卸载/禁用vetur插件 不支持vue3
    4.2 安装ESlint插件
      - 只要安装并启用了这个插件，它就会自动查找项目中的 ESlint 配置规范，并且给出验证提示
      - 如何格式化? ESlint 提供了格式化工具，但是需要手动配置才可以。
      - 扩展中找到eslint eslint>Format:Enable 勾选 启用eslint作为格式化工具
      - eslint：Run 选择 onType 实时更新
      - 如果工作区有多个格式化工具，设置eslint为.js，.ts，.vue文件为默认格式化工具
    4.3 安装volar插件 支持vue3
### 安装git commit hook
  1.安装lint-staged https://github.com/okonet/lint-staged#readme 在提交代码时进行eslint校验,校验不过不可提交到远端仓库
  2.安装husky https://github.com/typicode/husky
  3.vite-plugin-eslint https://github.com/gxmari007/vite-plugin-eslint 在开发,打包时进行eslint校验,终端和浏览器都会提示相应的错误信息。
