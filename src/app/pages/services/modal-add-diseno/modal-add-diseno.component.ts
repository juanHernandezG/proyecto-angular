import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalAddService } from '../modal-add.service';
import { AppService } from '../../app.service';
import { ModalAddDisenoService } from '../modal-add-diseno.service';

@Component({
  selector: 'app-modal-add-diseno',
  templateUrl: './modal-add-diseno.component.html',
  styleUrls: ['./modal-add-diseno.component.css']
})
export class ModalAddDisenoComponent {

  formProduct: FormGroup;

  nuevoDiseno: any = {};
  constructor(public modaladdDisenoService: ModalAddDisenoService, public appService: AppService, public formBuilder: FormBuilder){
    this.formProduct = formBuilder.group({
      nombre: ['',[Validators.required, Validators.min(0), Validators.max(4)]],
      imagen:['',[Validators.required, Validators.max(200)]],
    })
  }

  agregarDiseno(): void {
    //
    this.nuevoDiseno = this.formProduct.value;
    // Lógica para agregar el nuevo producto a la base de datos
    this.appService.agregarDiseno(this.nuevoDiseno).subscribe(
      (response) => {
        console.log('Diseño agregado exitosamente');
        // Aquí puedes recargar la lista de productos si lo deseas
        this.modaladdDisenoService.ocultarModalAddDiseno();
      },
      (error) => {
        console.log('Error al agregar el producto');
      }
    );
  }

  ocultarModalAddDiseno(){
    this.modaladdDisenoService.ocultarModalAddDiseno();
  }


  saveData(){
    console.log(this.formProduct.value);
  }
}
