import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CardsComponent} from './cards.component';
import {FormsComponent} from './forms.component';
import {SwitchesComponent} from './switches.component';
import {TablesComponent} from './tables.component';
import {TabsComponent} from './tabs.component';
import {RolesComponent} from "./roles.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: '基础资料'
    },
    children: [
      {
        path: '',
        redirectTo: 'roles'
      },
      {
        path: 'roles',
        component: RolesComponent,
        data: {
          title: '角色'
        }
      },
      {
        path: 'menus',
        component: CardsComponent,
        data: {
          title: '菜单'
        }
      },
      {
        path: 'users',
        component: SwitchesComponent,
        data: {
          title: '用户'
        }
      },
      {
        path: 'elements',
        component: TablesComponent,
        data: {
          title: '元素'
        }
      },
      {
        path: 'functions',
        component: TablesComponent,
        data: {
          title: '功能'
        }
      },
      {
        path: 'user-groups',
        component: TabsComponent,
        data: {
          title: '用户组'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
