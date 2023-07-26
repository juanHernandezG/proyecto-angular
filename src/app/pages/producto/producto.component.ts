import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Allproduct, Color, Mangalarga, Polera, Poleron, Polo, Producto, Talla, Tipo } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CarritoComprasService } from '../carrito-compras.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  tipos: Tipo[] = [];
  colores: Color[] = [];
  producto: Producto = {
    idproducto: 0,
    cantidad: 1,
    color: '',
    talla: '',
    imagenprenda: '',
    imagendiseno: '',
    precio: 0
  };
  talla: any[] = [];
  disenos: any[] = [];
  productos: any[] = [];
  nombreTipo: string = '';
  public poleras: Polera[] | undefined;
  public precioP: number | undefined;
  public stockP: number | undefined;
  public polerones: Poleron[] | undefined;
  public polos: Polo[] | undefined;
  public mangalargas: Mangalarga[] | undefined;
  public imagen: string = '';
  imagenSeleccionada: string | null = null;
  imagenPredeterminada: string = '';
  archivoSeleccionado: File | null = null;
  idtipo: number | undefined;
  incrementadoPrecio = false;
  cantidadProductos = 1;

  onDesignSelected(event: any) {
    const selectedImagen = event.target.value;
    this.imagenSeleccionada = selectedImagen;
    this.incrementarPrecio();
  }


  onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0] as File;
    if (this.archivoSeleccionado) {
      this.imagenSeleccionada = URL.createObjectURL(this.archivoSeleccionado);
    }
    this.incrementarPrecio();
  }

  private incrementarPrecio() {
    if (!this.incrementadoPrecio && this.precioP !== undefined) {
      this.precioP += 7000;
      this.incrementadoPrecio = true;
    }
  }

  onColorSelected(event: any) {
    const colorSeleccionado = event.target.value; // Obtener el color seleccionado
    const color = this.colores.find((c: Color) => c.color === colorSeleccionado); // Buscar el color en la lista de colores disponibles

    if (color) {
      // Asignar la imagen correspondiente al color seleccionado
      this.imagenPredeterminada= color.imagen;
    } else {
      // Si no se encuentra el color, establecer la imagen como null
      this.imagenSeleccionada = null;
    }
  }


  incrementarCantidad() {
    this.cantidadProductos++;
  }

  decrementarCantidad() {
    if (this.cantidadProductos > 1) {
      this.cantidadProductos--;
      
    }
  }

 

  getPrecioBase(): void {
    if (this.idtipo !== undefined) {
      this.tipoService.getPrecioBasePorTipo(this.idtipo).subscribe(
        (precioBase: number) => {
          this.precioP = precioBase; // Establece el precio base obtenido del servicio
        },
        (error) => {
          console.error('Error al obtener el precio base:', error);
        }
      );
    }
  }

  constructor(private tipoService: AppService, private route: ActivatedRoute, private carritoService: CarritoComprasService) {
    this.tipoService.getPoleras().subscribe(
      (res: Polera[]) => {
        this.poleras = res;
        console.log(this.poleras);
      },
      err => console.log(err)
    );

    this.tipoService.getColor().subscribe(
      (res: Color[]) => {
        this.colores = res;
        console.log(this.colores);
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

    this.tipoService.getTalla().subscribe((res: any[])=>{
      this.tipoService.products = res;
      console.log(this.tipoService.products);
    },
    err => console.log(err)
    ) 

    this.tipoService.getDiseno().subscribe((res: any[])=>{
      this.tipoService.disenos = res;
      console.log(this.tipoService.disenos);
    },
    err => console.log(err)
    )
  }

  ngOnInit(): void {
    this.tipoService.getPoleras().subscribe(data => {
      this.poleras = data;
      console.log(data);
    });

    this.tipoService.getColor().subscribe(data => {
      this.colores = data;
      console.log(data);
    });

    this.tipoService.getTipo().subscribe(data => {
      this.tipos = data;
      console.log(data);
    });

    this.tipoService.getTalla().subscribe(data => {
      this.talla = data;
      console.log(data);
    });

    this.tipoService.getDiseno().subscribe(data => {
      this.disenos = data;
      console.log(data);
    })

    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;

      // Obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
      const idTipoSeleccionado = Number(this.route.snapshot.paramMap.get('idtipo'));
      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === idTipoSeleccionado);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
      this.imagenPredeterminada = tipoSeleccionado ? tipoSeleccionado.imagen: '';
      
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
          this.stockP = poleraSeleccionada.stock;
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
          this.stockP = poleronSeleccionado.stock;
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
          this.stockP = poloSeleccionado.stock;
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
          this.stockP = mangalargaSeleccionada.stock;
        } else {
          console.error('Tipo de mangalarga no encontrado.');
        }
      },
      (error) => {
        console.error('Error al obtener las mangalargas:', error);
      }
    );

    this.idtipo = Number(this.route.snapshot.paramMap.get('idtipo'));

    // Obtener el nombre del tipo seleccionado según el idtipo que tienes en la URL
    this.tipoService.getTipo().subscribe((data: Tipo[]) => {
      this.tipos = data;

      const tipoSeleccionado = this.tipos.find((tipo: Tipo) => tipo.idtipo === this.idtipo);
      this.nombreTipo = tipoSeleccionado ? tipoSeleccionado.nombre : '';
    });

    // Obtener el precio base del tipoid actual
    this.getPrecioBase();

    

    
  }
}