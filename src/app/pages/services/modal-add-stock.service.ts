import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalAddStockService {

  private productoSeleccionado: BehaviorSubject<number> = new BehaviorSubject<number>(0);
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

  setProductoSeleccionado(idprod: number) {
    this.productoSeleccionado.next(idprod);
  }

  // Obtener el idprod seleccionado como un observable
  getProductoSeleccionado(): Observable<number> {
    return this.productoSeleccionado.asObservable();
  }

  private stockUpdatedSource = new Subject<void>();

  stockUpdated$ = this.stockUpdatedSource.asObservable();

  updateStock() {
    this.stockUpdatedSource.next();
  }
  
}
