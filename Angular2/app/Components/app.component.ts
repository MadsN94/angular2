import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Dashboard</h1><router-outlet><nav><a routerLink="/dashboard" routerLinkActive="active">Click me!</a></nav></router-outlet>',
    styleUrls: ['app/Styles/app.component.css']
})
export class AppComponent {

}

