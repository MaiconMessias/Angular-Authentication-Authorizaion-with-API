import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Injectable({
    providedIn: 'root'
})
export class HomeService{
    
    baseUrl = 'http://localhost:8080';

    constructor( private http: HttpClient, private app: AppService) {}

    getString(): Observable<string> {
        return this.http.get<string>(`${this.baseUrl}/all`, {headers: this.app.headersAuth});
    }
}