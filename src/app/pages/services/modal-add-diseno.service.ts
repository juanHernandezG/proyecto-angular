import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Diseno } from '../products';

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

  private diseñosSubject: BehaviorSubject<Diseno[]> = new BehaviorSubject<Diseno[]>([]);
  public diseños$: Observable<Diseno[]> = this.diseñosSubject.asObservable();

  agregarDiseno(diseno: Diseno): void {
    const diseñosActuales = this.diseñosSubject.getValue();
    this.diseñosSubject.next([...diseñosActuales, diseno]);
  }

  obtenerDisenos(): Diseno[] {
    return this.diseñosSubject.getValue();
  }

  actualizarDisenos(diseños: Diseno[]): void {
    this.diseñosSubject.next(diseños);
  }

  showMessage(message: string): void {
    alert(message);
  }
}
