import { Producto } from './../../../products';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

declare var paypal : any;

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {

  @ViewChild('paypal', { static:true }) paypalElement : ElementRef | undefined;

  producto = {
    descripcion : 'producto',
    precio : 19.99,
    img : 'imagen'
  }

  ngOnInit(): void {

    paypal
    .Buttons({
      createOrder: (data : any, actions : any) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.producto.descripcion,
              amount : {
                currency_code:'EUR',
                value : this.producto.precio
              }
            }
          ]
        })
      },
      onApprove: async (data : any, actions : any) => {
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err: any)=> {
        console.log(err);
      }
    })
    .render(this.paypalElement?.nativeElement);
  }


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
