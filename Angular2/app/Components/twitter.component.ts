import { Component } from '@angular/core';
import { TwitterService } from './../Services/TwitterService';


@Component({
    selector: 'twitter',
    templateUrl: 'app/Views/news.component.html',
    providers: [TwitterService]
})

export class TwitterComponent {
    

    constructor(private twitter: TwitterService) {
        
    }

    getHomeTimeLine() {
        return this.twitter.getNews();
    }

}