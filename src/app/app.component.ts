import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flower-Porter';
  isNavCollapsed:boolean = false;

  isSideNavToggled(event:boolean){
    this.isNavCollapsed = event;
    console.log(this.isNavCollapsed)
  }
}
