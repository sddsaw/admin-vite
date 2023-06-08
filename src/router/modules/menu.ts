import { type RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/menu',
    name: 'menu',
    component: async () => await import('@/layout/routerView/parent.vue'),
    redirect: '/menu/menu1',
    meta: {
      title: 'message.router.menu',
      isLink: '',
      isHide: false,
      isKeepAlive: true,
      isAffix: false,
      isIframe: false,
      roles: ['admin', 'common'],
      icon: 'iconfont icon-caidan'
    },
    children: [
      {
        path: '/menu/menu1',
        name: 'menu1',
        component: async () => await import('@/layout/routerView/parent.vue'),
        redirect: '/menu/menu1/menu11',
        meta: {
          title: 'message.router.menu1',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-caidan'
        },
        children: [
          {
            path: '/menu/menu1/menu11',
            name: 'menu11',
            component: async () => await import('@/views/menu/menu1/menu11/index.vue'),
            meta: {
              title: 'message.router.menu11',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caidan'
            }
          },
          {
            path: '/menu/menu1/menu12',
            name: 'menu12',
            component: async () => await import('@/views/menu/menu1/menu12/index.vue'),
            meta: {
              title: 'message.router.menu12',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caidan'
            }
          },
          {
            path: '/menu/menu1/menu13',
            name: 'menu13',
            component: async () => await import('@/layout/routerView/parent.vue'),
            redirect: '/menu/menu1/menu13/menu131',
            meta: {
              title: 'message.router.menu13',
              isLink: '',
              isHide: false,
              isKeepAlive: true,
              isAffix: false,
              isIframe: false,
              roles: ['admin', 'common'],
              icon: 'iconfont icon-caidan'
            },
            children: [
              {
                path: '/menu/menu1/menu12/menu131',
                name: 'menu131',
                component: async () => await import('@/views/menu/menu1/menu13/menu131/index.vue'),
                meta: {
                  title: 'message.router.menu131',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'iconfont icon-caidan'
                }
              },
              {
                path: '/menu/menu1/menu12/menu132',
                name: 'menu132',
                component: async () => await import('@/views/menu/menu1/menu13/menu132/index.vue'),
                meta: {
                  title: 'message.router.menu132',
                  isLink: '',
                  isHide: false,
                  isKeepAlive: true,
                  isAffix: false,
                  isIframe: false,
                  roles: ['admin', 'common'],
                  icon: 'iconfont icon-caidan'
                }
              }
            ]
          }
        ]
      },
      {
        path: '/menu/menu2',
        name: 'menu2',
        component: async () => await import('@/views/menu/menu2/index.vue'),
        meta: {
          title: 'message.router.menu2',
          isLink: '',
          isHide: false,
          isKeepAlive: true,
          isAffix: false,
          isIframe: false,
          roles: ['admin', 'common'],
          icon: 'iconfont icon-caidan'
        }
      }
    ]
  }
] as RouteRecordRaw[]
