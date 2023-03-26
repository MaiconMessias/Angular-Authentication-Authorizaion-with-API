import { Usuario } from "../model/usuario";
import { Component, OnInit} from "@angular/core";
import { AppService } from "../service/app.service";
import { Router } from "@angular/router";
import { UsuarioService } from "../service/usuario.service";

@Component({
    styleUrls: ['./usuario-list.component.css'],
    templateUrl: './usuario-list.component.html'
})
export class UsuarioComponent  implements OnInit {

    __usuarios!: Usuario[];
    
    pag : number = 1 ;
    contador : number = 3;

    constructor(private app: AppService, private userservice: UsuarioService, private router: Router){
        if (!this.app.authenticated)
            this.router.navigateByUrl('/login');
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    getAllUsers() {
      this.userservice.getAllUsers().subscribe({
          next: usuarios => {this.__usuarios = usuarios;},
          error: err => console.log('Erro al obter usuarios !')
      })     
    }

}