import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AppService } from "src/app/service/app.service";
import { UsuarioService } from "src/app/service/usuario.service";
import { Usuario } from "../model/usuario";

@Component({
    templateUrl: './usuario-detalhe.component.html'
})
export class UsuarioDetalheComponent implements OnInit{

    __usuario = new Usuario;
    id!: number;
    formTitle: string = "Editar Usuário";

    constructor(private app: AppService, private usuarioService: UsuarioService, 
                private route: ActivatedRoute, private router: Router){}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        if (this.app.authenticated) {
            this.getUserById();
        }else  
          this.router.navigateByUrl('/login');
    }

    getUserById(){
        return this.usuarioService.getUserById(this.id).subscribe({
            next: usuario => this.__usuario = usuario,
            error: err => this.formTitle = "Adicionar Usuário"
        });            
    }

    save(){
        return this.usuarioService.salvarUsuario(this.__usuario).subscribe({
            next: () => { console.log('Salvo com sucesso !'); this.router.navigateByUrl('/usuariolist');},
            error: err => console.log('Erro ao salvar usuario')
        });            
    }
    
    deletar(){
        return this.usuarioService.deletarUsuario(this.__usuario.id!).subscribe({
            next: () => { console.log('Deletado com sucesso !'); this.router.navigateByUrl('/usuariolist'); },
            error: err => console.log('Erro ao deletar usuario')
        });            
    }

    back(){
        this.router.navigateByUrl('/usuariolist');
    }
 
    // evento usado para o componente de select
    /*onSelect(event: Event): any{
        return (event.target as HTMLSelectElement).value;
    }*/
}