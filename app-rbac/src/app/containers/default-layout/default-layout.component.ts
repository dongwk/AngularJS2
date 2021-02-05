import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../hero.service";
import {Location} from "@angular/common";
import {MenuService} from "../../service/menu.service";
import {INavData} from "@coreui/angular";
import {tap, timeout} from "rxjs/operators";
import {Constant} from "../../constant/constant";
import {INavBadge} from "@coreui/angular/lib/sidebar/app-sidebar-nav";
import {Menu} from "../../model/menu";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems: INavData[] = navItems;

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {

    this.menuService.listMenus().subscribe(menus => {
      let navItems: INavData[] = [];

      menus.forEach(menu => {
        let b: INavBadge;
        if (menu.code == Constant.MENU_DASHBOARD_CODE) {
          b =  {
            variant: 'info',
            text: 'NEW'
          };
        }

        navItems.push({
          name: menu.name,
          url: menu.url,
          icon: menu.icon,
          badge: b,
          children: menu.children
        })
      });

      // this.navItems = navItems;
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
