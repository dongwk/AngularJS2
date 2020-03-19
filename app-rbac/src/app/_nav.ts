import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: '权限管理',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: '角色',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: '菜单',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: '用户',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: '元素',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: '功能',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: '用户组',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      }
    ]
  }
];
