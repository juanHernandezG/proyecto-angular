import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Mangalarga, Polera, Poleron, Polo, Tipo } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{

  AppService: any;
  poleras: Polera[] = [];
  tipos: Tipo[] = [];
  nombreTipo: string = '';
  precioPrimeraPolera: number | undefined;

  constructor(private tipoService: AppService, private route: ActivatedRoute){
    this.tipoService.getPoleras().subscribe((res: any[])=>{
      this.tipoService.polera = res;
      console.log(this.tipoService.polera);
    },
    err => console.log(err)
    ) 

    this.tipoService.getTipo().subscribe((res: any[])=>{
      this.tipoService.products = res;
      console.log(this.tipoService.products);
    },
    err => console.log(err)
    ) 
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tipoService.getPoleras().subscribe(data => {
      this.poleras = data;
      console.log(data);
    });

    this.tipoService.getTipo().subscribe(data => {
      this.tipos = data;
      console.log(data);
    });

    this.tipoService.getPoleras().subscribe((data: Polera[]) => {
      this.poleras = data;
      console.log(data);
    });

    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;
      console.log(data);
    });
    
    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;
  
      // Aquí puedes obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
      const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === idTipoSeleccionado);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
      
    });

  }
    
}
