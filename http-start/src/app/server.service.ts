import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx'
import { Observable } from "rxjs/Rx";

@Injectable()
export class ServerService {
    constructor(private http: Http){}

    //returns an observable -- must subscribe to this observable to actually use it
    createPostRequest(servers: any[]) {
        const h = new Headers({'Content-Type':'application/json'});
        //return this.http.post('https://udemy-ng-http-79bc0.firebaseio.com/data.json', servers, {headers: h});

        //put lets us target 
        return this.http.put('https://udemy-ng-http-79bc0.firebaseio.com/data.json', servers, {headers: h});
    }

    //returns an observable -- must subscribe to this observable to actually use it
    createGetRequest(){
        //.map() is an rxjs function that wraps whatever gets returned from the anon function an wraps it in a new observable
        return this.http.get('https://udemy-ng-http-79bc0.firebaseio.com/data.json').map(
            (response: Response) => {
                return response.json();
            }
        ).catch(
            (error: Response) => {
                return Observable.throw(error)
            }
        );
    }

    getAppName(){
        return this.http.get('https://udemy-ng-http-79bc0.firebaseio.com/AppName.json').map(
            (response: Response) => {
                return response.json();
            }
        )
    }
}