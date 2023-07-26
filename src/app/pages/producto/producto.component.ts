import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Color, Mangalarga, Polera, Poleron, Polo, Tipo } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  tipos: Tipo[] = [];
  nombreTipo: string = '';
  public poleras: Polera[] | undefined;
  public precioP: number | undefined;
  public polerones: Poleron[] | undefined;
  public polos: Polo[] | undefined;
  public mangalargas: Mangalarga[] | undefined;
  public imagen: string = '';
  colores: Color[] = [];

  constructor(private tipoService: AppService, private route: ActivatedRoute) {
    this.tipoService.getPoleras().subscribe(
      (res: Polera[]) => {
        this.poleras = res;
        console.log(this.poleras);
      },
      err => console.log(err)
    );

    this.tipoService.getTipo().subscribe(
      (res: Tipo[]) => {
        this.tipos = res;
        console.log(this.tipos);
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
    this.tipoService.getPoleras().subscribe(data => {
      this.poleras = data;
      console.log(data);
    });

    this.tipoService.getTipo().subscribe(data => {
      this.tipos = data;
      console.log(data);
    });

    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;

      // Obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
      const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === idTipoSeleccionado);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
    });

    this.tipoService.getPoleras().subscribe(
      (data: Polera[]) => {
        this.poleras = data;

        // Obtener el precio y la imagen de la polera del tipo seleccionado
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const poleraSeleccionada = this.poleras.find((polera: Polera) => polera.tipo === idTipoSeleccionado);

        if (poleraSeleccionada) {
          this.precioP = poleraSeleccionada.precio;
          this.imagen = poleraSeleccionada.imagen;
        } else {
          console.error('Tipo de polera no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las poleras:', error);
      }
    );

    this.tipoService.getPoleron().subscribe(
      (data: Poleron[]) => {
        this.polerones = data;

        // Obtener el precio y la imagen del polerón del tipo seleccionado
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const poleronSeleccionado = this.polerones.find((poleron: Poleron) => poleron.tipo === idTipoSeleccionado);

        if (poleronSeleccionado) {
          this.precioP = poleronSeleccionado.precio;
          this.imagen = poleronSeleccionado.imagen;
        } else {
          console.error('Tipo de polerón no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener los polerones:', error);
      }
    );

    this.tipoService.getPolo().subscribe(
      (data: Polo[]) => {
        this.polos = data;

        // Obtener el precio y la imagen del polo del tipo seleccionado
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const poloSeleccionado = this.polos.find((polo: Polo) => polo.tipo === idTipoSeleccionado);

        if (poloSeleccionado) {
          this.precioP = poloSeleccionado.precio;
          this.imagen = poloSeleccionado.imagen;
        } else {
          console.error('Tipo de polo no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener los polos:', error);
      }
    );

    this.tipoService.getMangalarga().subscribe(
      (data: Mangalarga[]) => {
        this.mangalargas = data;

        // Obtener el precio y la imagen de la mangalarga del tipo seleccionado
        const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
        const mangalargaSeleccionada = this.mangalargas.find((mangalarga: Mangalarga) => mangalarga.tipo === idTipoSeleccionado);

        if (mangalargaSeleccionada) {
          this.precioP = mangalargaSeleccionada.precio;
          this.imagen = mangalargaSeleccionada.imagen;
        } else {
          console.error('Tipo de mangalarga no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las mangalargas:', error);
      }
    );
  }
}