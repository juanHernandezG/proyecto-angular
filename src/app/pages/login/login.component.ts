import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    formLogin:FormGroup ;

    constructor( private loginService:LoginService, 
                 private formBuilder: FormBuilder){
      this.formLogin = this.formBuilder.group({
        correo: ['',[Validators.required]],
        clave: ['',[Validators.required]]
      });
    }

    login(){
      console.log(this.formLogin.value.correo);
      console.log(this.formLogin.value.clave);

      this.loginService.login(this.formLogin.value.correo,
                              this.formLogin.value.clave)
        .subscribe((res:any[]) =>{
          console.log(res);
          (err:any) => console.log(err)
        });

    }
}
