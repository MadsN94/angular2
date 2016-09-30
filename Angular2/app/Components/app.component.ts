import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` 
<h1>My First Angular App</h1>
<nav>
    <a routerLink="/hello" routerLinkActive="active">Hello view</a>
  </nav>
  <router-outlet></router-outlet>
 `
})
export class AppComponent {

}

