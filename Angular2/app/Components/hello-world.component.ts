import { Component } from '@angular/core';
import { HelloWorldService } from './../Services/HelloWorldService';


@Component({
    selector: 'my-hello',
    template: 'app/Views/hello-world.component.html',
    styleUrls: ['app/Styles/hello-world.component.css'], //Will override globale styles
    providers: [HelloWorldService]
})
export class HelloWorldComponent {
    constructor(private helloWorldService: HelloWorldService) {

    }

    hello() {
        return this.helloWorldService.hello();
    }
}