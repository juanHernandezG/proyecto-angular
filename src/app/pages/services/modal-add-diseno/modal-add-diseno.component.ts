import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalAddService } from '../modal-add.service';
import { AppService } from '../../app.service';
import { ModalAddDisenoService } from '../modal-add-diseno.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-modal-add-diseno',
  templateUrl: './modal-add-diseno.component.html',
  styleUrls: ['./modal-add-diseno.component.css']
})
export class ModalAddDisenoComponent {

  formProduct: FormGroup;
  files: File[] = [];

  nuevoDiseno: any = {};
  constructor(public modaladdDisenoService: ModalAddDisenoService, public appService: AppService, public formBuilder: FormBuilder,
    private fireStorage: AngularFireStorage){
    this.formProduct = formBuilder.group({
      nombre: ['',[Validators.required, Validators.min(0), Validators.max(4)]],
      imagen:[null,[Validators.required, Validators.max(200)]],
    })
  }

  agregarDiseno(): void {
    this.nuevoDiseno = this.formProduct.value;

    const diseñosActuales = this.modaladdDisenoService.obtenerDisenos();

    const nombreExistente = diseñosActuales.some(d => d.nombre === this.nuevoDiseno.nombre);
    if (nombreExistente) {
      this.modaladdDisenoService.showMessage('Ya existe un diseño con el mismo nombre');
      return; 
    }


    const imagenExistente = diseñosActuales.some(d => d.imagen === this.nuevoDiseno.imagen);
    if (imagenExistente) {
      this.modaladdDisenoService.showMessage('Ya existe un diseño con la misma imagen');
      return; 
    }

    this.appService.agregarDiseno(this.nuevoDiseno).subscribe(
      (response) => {
        console.log('Diseño agregado exitosamente');

        diseñosActuales.push(this.nuevoDiseno);

        this.modaladdDisenoService.actualizarDisenos(diseñosActuales);

        this.modaladdDisenoService.ocultarModalAddDiseno();

        this.formProduct.reset();
      },
      (error) => {
        console.log('Error al agregar el producto');
      }
    );
  }
  
  

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `yt/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();

      // Actualizar la imagen predeterminada con la URL del archivo cargado
      this.formProduct.patchValue({ imagen: url });
    }
  }

  ocultarModalAddDiseno(){
    this.modaladdDisenoService.ocultarModalAddDiseno();
  }


  saveData(){
    console.log(this.formProduct.value);
  }

  limpiarCampos() {
    this.formProduct.reset(); // Restablecer el formulario a su estado inicial
  }
  
}
