import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  tallas: any[] = [];
  colores: any[] = [];
  disenos: any[] = [];
  productos: any[] = [];
  AppService: any;

  constructor(private tipoService: AppService){
    this.tipoService.getTalla().subscribe((res: any[])=>{
      this.tipoService.tallas = res;
      console.log(this.tipoService.tallas);
    },
    err => console.log(err)
    ) 

    this.tipoService.getColor().subscribe((res: any[])=>{
      this.tipoService.colores = res;
      console.log(this.tipoService.colores);
    },
    err => console.log(err)
    )

    this.tipoService.getDiseno().subscribe((res: any[])=>{
      this.tipoService.disenos = res;
      console.log(this.tipoService.disenos);
    },
    err => console.log(err)
    )

    this.tipoService.getProductos().subscribe((res: any[])=>{
      this.tipoService.productos = res;
      console.log(this.tipoService.productos);
    },
    err => console.log(err)
    )
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.tipoService.getTalla().subscribe(data => {
      this.tallas = data;
      console.log(data);
    });

    this.tipoService.getColor().subscribe(data => {
      this.colores = data;
      console.log(data);
    })

    this.tipoService.getDiseno().subscribe(data => {
      this.disenos = data;
      console.log(data);
    })

    this.tipoService.getProductos().subscribe(data => {
      this.productos = data;
      console.log(data);
    })
  }
}
