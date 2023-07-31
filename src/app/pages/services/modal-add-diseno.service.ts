import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddDisenoService {

  public ocultoaddDiseno: string ='';
  
  constructor() { }
  //Ocultar modal del stock
  ocultarModalAddDiseno(){
    this.ocultoaddDiseno = '';
  }
  //Mostrar modal del stock
  mostrarModalAddDiseno(){
    this.ocultoaddDiseno = 'block';
  }
}
