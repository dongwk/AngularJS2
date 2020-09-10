import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../hero.service";
import {Location} from "@angular/common";
import {MenuService} from "../../service/menu.service";
import {INavData} from "@coreui/angular";
import {tap, timeout} from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems: INavData[] = [];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {

    this.menuService.getMenus().subscribe(menus => {
      let navItems = [];

      // navItems.push({
      //   name: 'Dashboard',
      //   url: '/dashboard',
      //   icon: 'icon-speedometer',
      //   badge: {
      //     variant: 'info',
      //     text: 'NEW'
      //   }
      // });

      menus.forEach(menu => {
        navItems.push({
          name: menu.name,
          url: menu.url,
          icon: menu.icon,
        })
      });

      this.navItems = navItems;
    });
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

}
