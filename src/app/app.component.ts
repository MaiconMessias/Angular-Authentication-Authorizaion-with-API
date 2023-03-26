import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Authentication Authorization';

  constructor(private app: AppService, private router: Router) {}
  
  logout() {
    this.app.authenticated = false;
    this.router.navigateByUrl('login');
  }
}
