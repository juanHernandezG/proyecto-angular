import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    formLogin:FormGroup ;

    constructor( private loginService:LoginService, 
                 private formBuilder: FormBuilder){
                  this.formLogin = this.formBuilder.group({
                    correo: ['',[Validators.required]],
                    clave: ['',[Validators.required]]
                  });
    }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.formLogin = this.formBuilder.group({
    correo: ['',[Validators.required, Validators.email]],
    clave: ['',[Validators.required]]
  })
}

    login(){
      console.log(this.formLogin.value.correo);
      console.log(this.formLogin.value.clave);

      if(this.formLogin.valid){
        this.loginService.login(this.formLogin.value.correo, this.formLogin.value.clave).subscribe((res:any)=>{
          console.log(res['id']);
          console.log(res)
          console.log('estoy en el login')
        });
      }
      // this.loginService.login(this.formLogin.value.correo,
      //                         this.formLogin.value.clave)
      //   .subscribe((res:any) =>{
      //     console.log(res);
      //     (err:any) => console.log(err)
      //   });

    }
}
