import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/usuario";
import { Observable } from "rxjs";
import { AppService } from "./app.service";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    baseUrl = 'http://localhost:8080/api/user';

    constructor(private http: HttpClient, private app: AppService) { }

    getAllUsers(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${this.baseUrl}/listarAllUsers`, {headers: this.app.headersAuth});
    }

    getUserById(id: number): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.baseUrl}/listarPorId/${id}`, {headers: this.app.headersAuth});
    }   
    
    salvarUsuario(usuario: Usuario) {
        return this.http.post(`${this.baseUrl}/salvarUsuario`, usuario, {headers: this.app.headersAuth});
    }
    
    deletarUsuario(id: number) {
        return this.http.delete(`${this.baseUrl}/deletarUsuario/${id}`, {headers: this.app.headersAuth});
    }
    
}