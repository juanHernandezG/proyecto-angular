import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAddService {

  public ocultoadd: string ='';
  private agregarProductoSubject = new Subject<void>();

  agregarProducto$ = this.agregarProductoSubject.asObservable();


  constructor() { }
  //Ocultar Modal del producto nvo
  ocultarModalAdd(){
    this.ocultoadd = '';
  }
  //Mostrar modal del producto nvo
  mostrarModalAdd(){
    this.ocultoadd = 'block';
  }

  emitirAgregarProducto(): void {
    this.agregarProductoSubject.next();
  }
}
