import { Component } from '@angular/core';
import { HeaderHomeComponent } from './headerHome/headerHome.component';

  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']

  @Component({
    selector: 'app-root',
    template: `
    <app-headerHome></app-headerHome>
    <router-outlet></router-outlet>
  `,
    styles: []
  })
  export class AppComponent {
    title = 'my-app';
  }

  