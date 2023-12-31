import { Component, OnInit } from '@angular/core';
import { Diseno } from '../../products';
import { AppService } from '../../app.service';
import { ModalAddDisenoService } from '../../services/modal-add-diseno.service';
import { ModalAddService } from '../../services/modal-add.service';

@Component({
  selector: 'app-mantenedor-diseno',
  templateUrl: './mantenedor-diseno.component.html',
  styleUrls: ['./mantenedor-diseno.component.css']
})
export class MantenedorDisenoComponent implements OnInit{

  numProductos: number = 0;
  disenos: Diseno[] = [];
  nuevoDiseno: any = {
    nombre: '',
    imagen: ''
  };

  constructor(private appService: AppService, public modaladdService: ModalAddService, 
    public modaldiseno: ModalAddDisenoService){}

  ngOnInit(): void {
    this.actualizarDisenos();
    this.modaldiseno.diseños$.subscribe((diseños) => {
      this.disenos = diseños;
    });
  }

  abrirModalDiseno(){
    this.modaldiseno.mostrarModalAddDiseno();
  }
  //Abrir el modal para el aumentar el stock
  abrirModalStock(){
    this.modaldiseno.mostrarModalAddDiseno();    
  }



  borrarDiseno(iddiseno: number): void {
    this.appService.borrarDiseno(iddiseno).subscribe(
      (response) => {
        console.log(response); // Manejar la respuesta del servidor si lo deseas
        // Después de una eliminación exitosa, actualiza la lista de diseños
        this.actualizarDisenos();
      },
      (error) => {
        console.error('Error al borrar el diseño:', error);
        // Manejar el error si es necesario
      }
    );
  }

  private actualizarDisenos(): void {
    this.appService.getDiseno().subscribe(
      (data: Diseno[]) => {
        this.disenos = data; // Actualiza los diseños que se están mostrando en el componente
        this.modaldiseno.actualizarDisenos(data); // Envía todos los diseños al servicio compartido
        this.numProductos = this.disenos.length;
      },
      (error) => {
        console.error('Error al obtener los diseños:', error);
        // Manejar el error si es necesario
      }
    );
  }
  
}
