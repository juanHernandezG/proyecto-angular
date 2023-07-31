import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/pages/app.service';
import { UIEnvio } from 'src/app/pages/products';

@Component({
  selector: 'app-mantenedor-envio',
  templateUrl: './mantenedor-envio.component.html',
  styleUrls: ['./mantenedor-envio.component.css']
})
export class MantenedorEnvioComponent implements OnInit {
  envios: UIEnvio[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    // Realiza la llamada HTTP para obtener los envíos utilizando el servicio
    this.appService.getEnvios().subscribe(
      (data) => {
        this.envios = data; // Asigna los datos de envíos a la variable 'envios'
      },
      (error) => {
        console.error('Error al obtener los datos de envíos:', error);
      }
    );
  }
}
