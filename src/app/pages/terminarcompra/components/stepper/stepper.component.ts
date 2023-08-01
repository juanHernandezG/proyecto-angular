import { Producto, UIEnvio } from './../../../products';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppService } from 'src/app/pages/app.service';
import { CarritoComprasService } from 'src/app/pages/carrito-compras.service';

declare var paypal : any;

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent implements OnInit {

  productos: Producto[] = this.carritoService.productosCarrito;

  @ViewChild('paypal', { static:true }) paypalElement : ElementRef | undefined;

  producto = {
    descripcion : 'producto',
    precio : 1,
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
        this.guardarDatosEnvio();
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
    firstCtrl4:['', [Validators.required,Validators.maxLength(9)]] //rut
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl:['', Validators.required], //ciudad
    secondCtrl2:['', Validators.required], //direccion
    secondCtrl3:['', [Validators.required, Validators.minLength(9)]] //numero
  });
  isEditable = false;

  constructor(private _formBuilder: FormBuilder, private appService: AppService, public carritoService: CarritoComprasService){
  }

  guardarDatosEnvio(): void {
    if (this.secondFormGroup.valid && this.productos.length > 0) {
      // Verificar que los campos no estén vacíos
      const correo = this.firstFormGroup.get('firstCtrl3')?.value ?? '';
      const celular = this.secondFormGroup.get('secondCtrl3')?.value ?? '';
      const direccion = this.secondFormGroup.get('secondCtrl2')?.value ?? '';
      const ciudad = this.secondFormGroup.get('secondCtrl')?.value ?? '';
      const rut = this.firstFormGroup.get('firstCtrl4')?.value ?? '';
      const apellido = this.firstFormGroup.get('firstCtrl2')?.value ?? '';
      const nombre = this.firstFormGroup.get('firstCtrl')?.value ?? '';
  
      console.log('Correo:', correo);
      console.log('Celular:', celular);
      console.log('Dirección:', direccion);
      console.log('Ciudad:', ciudad);
      console.log('Rut:', rut);
      console.log('Apellido:', apellido);
      console.log('Nombre:', nombre);
  
      if (!correo || !celular || !direccion || !ciudad || !rut || !apellido || !nombre) {
        console.error('Los campos no pueden estar vacíos');
        return;
      }
  
      // Crear un objeto datosEnvio con los datos de envío y la lista de idproducto
      const datosEnvio: UIEnvio = {
        idenvio: 0, // El idenvio será asignado automáticamente por la base de datos
        productosid: this.productos.map((producto) => producto.idproducto).join(','), // Utiliza la lista de idproducto del carrito
        nombre: nombre,
        apellido: apellido,
        rut: rut,
        ciudad: ciudad,
        direccion: direccion,
        celular: celular,
        correo: correo
      };
  
      console.log('Datos de envío:', datosEnvio);
  
      // Aquí puedes enviar los datos de envío al servicio para guardarlos en la base de datos
      this.appService.guardarDatosEnvio(datosEnvio).subscribe(
        (response) => {
          console.log('Datos de envío guardados exitosamente');
  
          // Una vez que los datos de envío se han guardado exitosamente, eliminamos los productos del carrito uno por uno
          this.productos.forEach((producto) => {
            this.carritoService.delete(producto.idproducto).subscribe(
              (result) => {
                console.log(`Producto con ID ${producto.idproducto} eliminado exitosamente`);
                // Aquí puedes realizar alguna acción adicional si es necesario
              },
              (error) => {
                console.error(`Error al eliminar producto con ID ${producto.idproducto}:`, error);
                // Aquí puedes mostrar un mensaje de error al usuario o realizar acciones para manejar el error
              }
            );
          });
        },
        (error) => {
          console.error('Error al guardar los datos de envío:', error);
          // Aquí puedes mostrar un mensaje de error al usuario o realizar acciones para manejar el error
        }
      );
    }
  }
  
  
  
}  
