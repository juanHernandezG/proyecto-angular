import { Component } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(public loginService: LoginService) {

  }

  cerrarSesion(){
    this.loginService.logout();
  }

}
