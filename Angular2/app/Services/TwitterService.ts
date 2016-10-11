import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import * as twitterAPI from 'node-twitter-api';

@Injectable()
export class TwitterService {
     

    constructor(private http: Http) {
        
    }

    getHometimeline() {
        
        /*var twitterAPI = require('node-twitter-api');
        var twitter = new twitterAPI({
            consumerKey: 'your consumer Key',
            consumerSecret: 'your consumer secret',
            callback: ''
        });

        twitter.getTimeline("home", {
        },
            '473151551-6S7FLdQeKprCfBuSQYdm4UiVH8MQHExmjxmbOHSB',
            'GnyMrJVEFn0hyN0qEYP9wTSvPVQdbPYl7h5hGCvhqkLPg',
            function (error: any, data: any, response: any) {
                if (error) {
                    console.log(error)
                } else {
                    return data;
                }
            }
        );*/
    }

    getNews() {
        return this.http.get('http://feeds.tv2.dk/nyheder/rss').map(res => res.json()).subscribe(res => {  });
    }

}