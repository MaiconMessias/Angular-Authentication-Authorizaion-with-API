import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from "../service/app.service";
import { HomeService } from "../service/home.service";

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  title = 'Praticando';
  greeting: any;
  baseUrl = 'http://localhost:8080';

  constructor( private http: HttpClient, private homeService: HomeService, private app: AppService, private router: Router) {
      if (!this.app.authenticated)
          this.router.navigateByUrl('/login');
  } 

  ngOnInit(): void {
      /*this.homeService.getString().subscribe({
          next: data => this.greeting = data,
          error: err => console.log("Erro: " + err )
      })*/
  }

} 