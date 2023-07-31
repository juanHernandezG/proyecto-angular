import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalAddStockService {

  public ocultoaddStock: string ='';
  
  constructor() { }
  //Ocultar modal del stock
  ocultarModalAddStock(){
    this.ocultoaddStock = '';
  }
  //Mostrar modal del stock
  mostrarModalAddStock(){
    this.ocultoaddStock = 'block';
  }

  
}
