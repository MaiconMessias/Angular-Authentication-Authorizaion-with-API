import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home.component';
import { LoginComponent } from './security/login.component';
import { UsuarioDetalheComponent } from './security/usuario-detalhe.component';
import { UsuarioComponent } from './security/usuario-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuariolist', component: UsuarioComponent},
  { path: 'usuariodetalhe', component: UsuarioDetalheComponent},
  { path: 'usuariodetalhe/:id', component: UsuarioDetalheComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
