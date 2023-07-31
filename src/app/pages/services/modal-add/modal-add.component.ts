import { Component } from '@angular/core';
import { ModalAddService } from '../modal-add.service';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {

  formProduct: FormGroup;

  nuevoProducto: any = {};
  constructor(public modaladdService: ModalAddService, public appService: AppService, public formBuilder: FormBuilder){
    this.formProduct = formBuilder.group({
      tipo: ['',[Validators.required, Validators.min(0), Validators.max(4)]],
      color:['',[Validators.required,]],
      talla:['',[Validators.required]],
      precio:['',[Validators.required, Validators.min(0)]],
      stock:['',[Validators.required, Validators.min(0)]],
      imagen:['',[Validators.required, Validators.max(200)]],
    })
  }

  ocultarModal(){
    this.modaladdService.ocultarModalAdd();
  }

  saveData(){
    console.log(this.formProduct.value);
  }

  agregarProd(): void {
    //
    this.nuevoProducto = this.formProduct.value;
    // Lógica para agregar el nuevo producto a la base de datos
    this.appService.agregarProd(this.nuevoProducto).subscribe(
      (response) => {
        console.log('Producto agregado exitosamente');
        // Aquí puedes recargar la lista de productos si lo deseas
        this.modaladdService.ocultarModalAdd();
      },
      (error) => {
        console.log('Error al agregar el producto');
      }
    );
  }
}
