import { Component } from '@angular/core';
import { RssService } from './../Services/RssService';
import { Http } from '@angular/http';
import { NgFor } from '@angular/common';

@Component({
    selector: 'rss-service',
    templateUrl: 'app/Views/news.component.html',
    providers: [NgFor, Http, RssService]
})
export class RssReaderComponent {

    constructor( private rss: RssService) {
        //'http%3A%2F%2Ffeeds.tv2.dk%2Fnyheder%2Frss';
    }

    ngOnInit() {
        return this.rss.tv2news();
    }
}
