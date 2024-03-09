import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(private router:Router){}

  isCollapsed:boolean = false
  @Output() sideNavToggle:EventEmitter<boolean> = new EventEmitter<boolean>();

  toggleSideNav(){
    this.isCollapsed = !this.isCollapsed;
    this.sideNavToggle.emit(this.isCollapsed);
  }

  checkActiveRouter(menu:string){
    let route = this.router.routerState.snapshot.url;
    return route === menu;
  }

}
