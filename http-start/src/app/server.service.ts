import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ServerService {
    constructor(private http: Http){}

    createPostRequest(servers: any[]) {
        return this.http.post('https://udemy-ng-http-79bc0.firebaseio.com/data.json', servers);
    }
}