import { Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: 'app/Views/main.component.html'
})
export class MainComponent {

    site() {
        return "Mads Nørgaard";
    }
}

