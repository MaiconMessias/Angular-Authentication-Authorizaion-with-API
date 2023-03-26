import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AppService{

    authenticated = false;
    headersAuth?: HttpHeaders;
    baseUrl = 'http://localhost:8080/api/user'

    constructor(private http: HttpClient) {}

    authenticate(credentials: any, callback: any) {
        const headers = new HttpHeaders(credentials ? {
            authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get(`${this.baseUrl}/user`, { headers: headers }).subscribe(response => {
            if (response) {
                this.authenticated = true;
                this.headersAuth = headers;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });
    }

}