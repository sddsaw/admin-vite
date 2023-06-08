
import { type RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/feature',
    name: 'feature',
    component: async () => await import('@/layout/routerView/parent.vue'),
    redirect: '/feature/table',
    meta: {
      title: '功能展示',
      isLink: '',
      isHide: false,
      isKeepAlive: true,
      isAffix: false,
      isIframe: false,
      roles: ['admin'],
      icon: 'iconfont icon-xitongshezhi'
    },
    children: [
      {
        path: '/feature/editor',
        name: 'featureEditor',
        component: async () => await import('@/views/feature/editor/index.vue'),
        meta: {
          title: 'Editor 编辑器',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-SetUp'
        }
      },
      {
        path: '/feature/excel',
        name: 'featureExcel',
        component: async () => await import('@/views/feature/excel/index.vue'),
        meta: {
          title: 'excel导入导出',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          icon: 'ele-OfficeBuilding'
        }
      },
      {
        path: '/feature/form',
        name: 'featureForm',
        component: async () => await import('@/views/feature/form/index.vue'),
        meta: {
          title: '表单封装演示',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-ColdDrink'
        }
      },
      {
        path: '/feature/print',
        name: 'featurePrint',
        component: async () => await import('@/views/feature/print/index.vue'),
        meta: {
          title: '页面打印',
          isLink: '',
          isHide: false,
          isKeepAlive: false,
          isAffix: false,
          isIframe: false,
          icon: 'ele-OfficeBuilding'
        }
      },
      {
        path: '/feature/splitpanes',
        name: 'featureSplitpanes',
        component: async () => await import('@/views/feature/splitpanes/index.vue'),
        meta: {
          title: '窗口拆分',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'ele-SetUp'
        }
      },
      {
        path: '/feature/table',
        name: 'featureTable',
        component: async () => await import('@/views/feature/table/index.vue'),
        meta: {
          title: '表格封装演示',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-caidan'
        }
      },
      {
        path: '/feature/upload',
        name: 'featureUpload',
        component: async () => await import('@/views/feature/upload/index.vue'),
        meta: {
          title: '上传文件',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin'],
          icon: 'iconfont icon-icon-'
        }
      }
    ]
  }
] as RouteRecordRaw[]
