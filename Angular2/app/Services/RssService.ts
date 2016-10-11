import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RssService {

    constructor(private http: Http) {

    }

    tv2news() {
        return this.http.get('http://rss2json.com/api.json?rss_url=http%3A%2F%2Ffeeds.tv2.dk%2Fnyheder%2Frss').map(res => res.json());
    }
}