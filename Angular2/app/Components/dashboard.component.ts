import { Component } from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: 'app/Views/dashboard.component.html',

})
export class DashboardComponent {
    site() {
        return "Dashboard";
    }
}
