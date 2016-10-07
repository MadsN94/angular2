import { Component } from '@angular/core';

@Component({
    selector: 'cv',
    template: '<p>My cv comming soon</p>'
})
export class CvComponent {
    site() {
        return "Mads Nørgaards CV";
    }
}

