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
  tipos: Tipo[] = [];
  nombreTipo: string = '';
  public poleras: Polera[] | undefined; // Aquí almacenaremos las poleras obtenidas
  public precioP: number | undefined;
  public polerones: Poleron[] | undefined;
  public polos: Polo[] | undefined;
  public mangalargas: Mangalarga[] | undefined;
  public imagen: string = '';
  public color: string = '';
  public coloresDisponibles: string[] = [];

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

    this.tipoService.getProductoByIdTipo
    
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

    this.tipoService.getPoleras().subscribe(
      (data: Polera[]) => {
        // La API ha respondido con los datos de las poleras
        this.poleras = data;

        // Aquí puedes obtener el nombre del tipo seleccionado según el idTipo que tienes en la URL
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const tipoSeleccionado = this.poleras.find((polera: Polera) => polera.tipo === idTipoSeleccionado);

        if (tipoSeleccionado) {
          this.precioP = tipoSeleccionado.precio;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.precio);
          console.log('Precio del tipo seleccionado:', this.precioP);
          this.imagen = tipoSeleccionado.imagen;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.imagen);
          console.log('Precio del tipo seleccionado:', this.imagen);
          this.color = tipoSeleccionado.color;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.color);
          console.log('Precio del tipo seleccionado:', this.color);
        } else {
          // Si no se encuentra el tipo seleccionado en la lista de poleras, puedes mostrar un mensaje de error o hacer alguna otra acción.
          console.error('Tipo de polera no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las poleras:', error);
      }
    );

    this.tipoService.getPoleron().subscribe(
      (data: Poleron[]) => {
        // La API ha respondido con los datos de las poleras
        this.polerones = data;

        // Aquí puedes obtener el nombre del tipo seleccionado según el idTipo que tienes en la URL
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const tipoSeleccionado = this.polerones.find((poleron: Poleron) => poleron.tipo === idTipoSeleccionado);

        if (tipoSeleccionado) {
          this.precioP = tipoSeleccionado.precio;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.precio);
          console.log('Precio del tipo seleccionado:', this.precioP);
          this.imagen = tipoSeleccionado.imagen;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.imagen);
          console.log('Precio del tipo seleccionado:', this.imagen);
        } else {
          // Si no se encuentra el tipo seleccionado en la lista de poleras, puedes mostrar un mensaje de error o hacer alguna otra acción.
          console.error('Tipo de polera no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las poleras:', error);
      }
    );

    this.tipoService.getPolo().subscribe(
      (data: Polo[]) => {
        // La API ha respondido con los datos de las poleras
        this.polos = data;

        // Aquí puedes obtener el nombre del tipo seleccionado según el idTipo que tienes en la URL
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const tipoSeleccionado = this.polos.find((polo: Polo) => polo.tipo === idTipoSeleccionado);

        if (tipoSeleccionado) {
          this.precioP = tipoSeleccionado.precio;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.precio);
          console.log('Precio del tipo seleccionado:', this.precioP);
          this.imagen = tipoSeleccionado.imagen;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.imagen);
          console.log('Precio del tipo seleccionado:', this.imagen);
        } else {
          // Si no se encuentra el tipo seleccionado en la lista de poleras, puedes mostrar un mensaje de error o hacer alguna otra acción.
          console.error('Tipo de polera no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las poleras:', error);
      }
    );

    this.tipoService.getMangalarga().subscribe(
      (data: Mangalarga[]) => {
        // La API ha respondido con los datos de las poleras
        this.mangalargas = data;

        // Aquí puedes obtener el nombre del tipo seleccionado según el idTipo que tienes en la URL
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const tipoSeleccionado = this.mangalargas.find((mangalarga: Mangalarga) => mangalarga.tipo === idTipoSeleccionado);

        if (tipoSeleccionado) {
          this.precioP = tipoSeleccionado.precio;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.precio);
          console.log('Precio del tipo seleccionado:', this.precioP);
          this.imagen = tipoSeleccionado.imagen;
          console.log('Nombre del tipo seleccionado:', tipoSeleccionado.imagen);
          console.log('Precio del tipo seleccionado:', this.imagen);
        } else {
          // Si no se encuentra el tipo seleccionado en la lista de poleras, puedes mostrar un mensaje de error o hacer alguna otra acción.
          console.error('Tipo de polera no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las poleras:', error);
      }
    );

   

  }
    
}
