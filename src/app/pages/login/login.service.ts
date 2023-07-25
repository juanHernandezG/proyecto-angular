import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logueado: boolean = false;
  

  constructor(private http: HttpClient, private router: Router) { }

  login(correo: any,clave: any) {
    let usuarioLogin = { correo: correo, clave: clave};
    return this.http.post('http://localhost:3000/login', usuarioLogin).pipe(map((res:any)=>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      this.logueado = true;
      this.router.navigate(['admin']);
      return res;
    }));
  }

  //Para cerrar la sesion de usuario/admin o desloguear.
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.logueado = false;
    this.router.navigate(['login']);
  }

  //Consultar si el usuario/admin esta activo 
  public loggedIn(): boolean{
    return localStorage.getItem('token') !== null;
  }

}
