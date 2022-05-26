import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
     
    {
      title: 'MY PROFILE',
      url: '/profile',
      icon: 'film'
    },
    {
      title: 'LOG OUT',
      url: '/start',
      icon: 'logout'
    }
  ];
  constructor() {}
}
