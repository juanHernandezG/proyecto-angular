import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddService {

  public ocultoadd: string ='';

  constructor() { }
  //Ocultar Modal del producto nvo
  ocultarModalAdd(){
    this.ocultoadd = '';
  }
  //Mostrar modal del producto nvo
  mostrarModalAdd(){
    this.ocultoadd = 'block';
  }
}
