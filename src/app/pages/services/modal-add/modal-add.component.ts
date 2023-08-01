import { Component } from '@angular/core';
import { ModalAddService } from '../modal-add.service';
import { AppService } from '../../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { UIProd } from '../../products';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent {

  formProduct: FormGroup;
  tipoNombres: { idtipo: number; nombre: string }[] = [];
  files: File[] = [];


  nuevoProducto: any = {};
  constructor(public modaladdService: ModalAddService, public appService: AppService, public formBuilder: FormBuilder,
    private fireStorage: AngularFireStorage){
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
    this.nuevoProducto = this.formProduct.value;

    // Verificar si ya existe un producto con las mismas características
    this.verificarProductoExistente(this.nuevoProducto).subscribe(existeProducto => {
      if (existeProducto) {
        alert('Ya existe un producto con las mismas características.');
      } else {
        this.appService.agregarProd(this.nuevoProducto).subscribe(
          (response) => {
            console.log('Producto agregado exitosamente');
            // Emitir el evento de agregar producto
            this.modaladdService.emitirAgregarProducto();
            this.modaladdService.ocultarModalAdd();
          },
          (error) => {
            console.log('Error al agregar el producto');
          }
        );
      }
    });
  }

  verificarProductoExistente(nuevoProducto: any): Observable<boolean> {
    const { tipo, color, talla } = nuevoProducto;
    return this.appService.getProdAll().pipe(
      map((productos: UIProd[]) => {
        return productos.some(
          producto =>
            producto.tipo === tipo &&
            producto.color === color &&
            producto.talla === talla
        );
      })
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
}
