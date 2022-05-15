import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Angular test-app';
  constructor() {
    console.log('11111111111111 AppComponent constructor');
  }
}
