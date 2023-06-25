<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-26 19:42:45
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-21 19:51:13
 * @FilePath: /admin-vite/README.md
 * @Description: 
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved. 
-->
jsx渲染路由菜单栏
使用函数式组件还想用vue的东西 ，就用defineComponent  11集
interface User{
  name:String,
  age:Number
}
obj:{
  // 指定props对象的参数
  type: Object as PropType<User>，
  default:()=>{}
}

埋点
灰度发布
大致过程：先设计一个缓存库，可以借助sessionStorage/localStorage或者IndexedDB来存储数据，这个根据具体场景而定，也有成熟第三方lru-cache库可以使用；然后对Axios增加一个配置项，开启缓存的请求，每次请求前先去读取缓存库，有则直接读取，没有则去请求后端，再把响应数据缓存一份再缓存库中。需要注意的是对于缓存的数据可能需要设置一个缓存的时长哦


看到12集l
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
  5. 安装stylelint插件 CSS检查工具
### 安装git commit hook
  1.安装lint-staged https://github.com/okonet/lint-staged#readme 在提交代码时进行eslint校验,校验不过不可提交到远端仓库
  2.安装husky https://github.com/typicode/husky
  3.vite-plugin-eslint https://github.com/gxmari007/vite-plugin-eslint 在开发,打包时进行eslint校验,终端和浏览器都会提示相应的错误信息。
  4.standard-version 生成CHANGELOG.md文件
  5.安装only-allow 包管理工具
  6.创建.npmrc文件  锁定配置npm源，统一项目node版本与包管理器 https://blog.csdn.net/qq_43440532/article/details/121949990
  配置路径别名 需要安装@type/node 用来补充nodejs的类型，在tsconfig.json需要添加baseUrl和paths
  7.配置jsx&tsx https://cn.vitejs.dev/plugins/
  8.配置EditorConfig文件对不同编译器进行控制
  9.配置.eslintignore 忽略目录中不进行eslint检查的文件
  10.安装 unplugin-auto-import 配置tsconfig.json和.eslintrc.cjs 解决报错 https://github.com/antfu/unplugin-auto-import
  11.安装unplugin-vue-components 按需引入element-plus https://github.com/antfu/unplugin-vue-components
  12.安装 pinia 和 pinia-plugin-persistedstate进行数据持久化 https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
  13.安装vite-plugin-vue-setup-extend-plus 解决.vue页面添加name名 https://github.com/chenxch/vite-plugin-vue-setup-extend-plus
  14.安装axios 
  15.pnpm i stylelint stylelint-config-rational-order stylelint-config-recommended-vue stylelint-config-standard-scss stylelint-prettier -D
  16.配置 stylelint.config.js 规范 https://segmentfault.com/a/1190000043751923
    浏览器的渲染原理：reflow和repaint
    -16.1 解析html文件构建dom树，解析css文件构建cssom
    -16.2结合dom树和cssom生成渲染树
    16.3根据渲染树进行layout（布局）和paint（渲染）
    在步骤16.3，生成渲染树的过程中，浏览器会从根节点（html节点）开始遍历每个树节点的css样式进行解析。在解析过程中，如果某个元素的定位变化影响了布局。则要倒回去重新渲染。
  17.根目录新建 .stylelintignore 文件,设置 stylelint 忽略问题
  18. 可以安装pnpm install -D prettier prettier-plugin-tailwindcss 用来在使用tailwindcss 添加class的时候进行class排序 暂时没有使用，后面在添加
   - 18-1 https://www.tailwindcss.cn/docs/editor-setup
   - 18-2 https://github.com/tailwindlabs/prettier-plugin-tailwindcss
  19. 安装 nprogress 路由进度导航条 https://github.com/rstacruz/nprogress
  
  hasAuthorization


https://github.com/Hyk260/PureAdmin/blob/master/package.json#L20 参考package.json 文件


vue项目部署自动检测更新 //https://juejin.cn/post/7247020241095688253?utm_source=gold_browser_extension
