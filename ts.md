<!--
 * @Author: 周恩波 zhouenbo@lx-dtx.com
 * @Date: 2023-05-30 19:56:44
 * @LastEditors: 周恩波
 * @LastEditTime: 2023-06-09 15:42:38
 * @FilePath: /admin-vite/ts.md
 * @Description: 
 * Copyright (c) 2023 by 上海有我科技有限公司, All Rights Reserved. 
-->
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
