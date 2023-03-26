import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../service/app.service";

@Component({
    templateUrl: './login.component.html'
  })
  export class LoginComponent {

    error: boolean =  false;
    credentials = {username: 'maicon', password: 'teste123'};
  
    constructor(private app: AppService, private http: HttpClient, private router: Router) {
    }
  
    login() {
      this.app.authenticate(this.credentials, () => {
          this.error = false; 
          this.router.navigateByUrl('home');
      });
      this.error = true;
      return false;
    }
}