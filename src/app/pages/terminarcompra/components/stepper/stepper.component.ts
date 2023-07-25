import { Component, Input } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  circles = document.querySelectorAll(".circles");
   progressBar = document.querySelector(".indicator");
   buttons = document.querySelectorAll("buttons");
  

   @Input()
  actualStep: number | undefined;

  firstFormGroup = this._formBuilder.group({
    firstCtrl:['', Validators.required],  //Nombre
    firstCtrl2:['', Validators.required], //Apellido
    firstCtrl3:['', [Validators.required,Validators.email]], //correo
    firstCtrl4:['', [Validators.required,Validators.maxLength(8)]] //rut
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl:['', Validators.required], //ciudad
    secondCtrl2:['', Validators.required], //direccion
    secondCtrl3:['', [Validators.required, Validators.minLength(9)]] //numero
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder){

  }


}
