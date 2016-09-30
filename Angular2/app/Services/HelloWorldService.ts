import { Injectable } from '@angular/core';

@Injectable()
export class HelloWorldService {

    hello() {
        return "Hello World. This comes from HelloWorldService";
    }
}