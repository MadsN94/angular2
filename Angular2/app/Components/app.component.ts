import { Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/Views/app.component.html',
    styleUrls: ['app/Styles/app.component.css']
})
export class AppComponent {
    site() {
        return "Mads N�rgaard";
    }
}

