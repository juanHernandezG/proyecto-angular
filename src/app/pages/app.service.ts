import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Color, Diseno, Mangalarga, Polera, Poleron, Polo, Producto, Talla, Tipo, Allproduct, Colorml, Prod, UIProd, UIEnvio } from './products';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost/3000';

  public products:Tipo[] = [];

  public polera:Polera[] = [];

  public mangalarga:Mangalarga[] = [];

  public poleron:Poleron[] = [];

  public polo:Polo[] = [];

  public talla:Talla[]=[];

  public disenos:Diseno[] = [];

  public productos:Producto[] = [];

  public colores:Color[] = [];

  public coloresml:Colorml[] = [];

  public prods: Prod[] = [];

  public prod: UIProd[] = [];

  constructor(private http: HttpClient) { }

  getTipo(): Observable<Tipo[]>{
    return this.http.get<Tipo[]>('http://localhost:3000/tipo')
      .pipe(map((res:any)=> res.data));
  }

  getPoleras(): Observable<Polera[]>{
    return this.http.get<Polera[]>('http://localhost:3000/polera')
      .pipe(map((res:any)=> res.data));
  }

  getMangalarga(): Observable<Mangalarga[]>{
    return this.http.get<Polera[]>('http://localhost:3000/mangalarga')
      .pipe(map((res:any)=> res.data));
  }

  getPoleron(): Observable<Poleron[]>{
    return this.http.get<Poleron[]>('http://localhost:3000/poleron')
      .pipe(map((res:any)=> res.data));
  }

  getPolo(): Observable<Polo[]>{
    return this.http.get<Polo[]>('http://localhost:3000/polo')
      .pipe(map((res:any)=> res.data));
  }

  getTalla(): Observable<Talla[]>{
    return this.http.get<Talla[]>('http://localhost:3000/talla')
      .pipe(map((res:any)=> res.data));
  }

  getColor(): Observable<Color[]>{
    return this.http.get<Color[]>('http://localhost:3000/color')
      .pipe(map((res:any)=> res.data));
  }

  getColorml(): Observable<Colorml[]>{
    return this.http.get<Colorml[]>('http://localhost:3000/colorml')
      .pipe(map((res:any)=> res.data));
  }

  getProd(): Observable<Prod[]>{
    return this.http.get<Prod[]>('http://localhost:3000/prod')
      .pipe(map((res:any)=> res.data));
  }

  

  getDiseno(): Observable<Diseno[]>{
    return this.http.get<Diseno[]>('http://localhost:3000/diseno')
      .pipe(map((res:any)=> res.data));
  }

  getProducto(): Observable<Producto[]>{
    return this.http.get<Producto[]>('http://localhost:3000/producto')
      .pipe(map((res:any)=> res.data));
  }

  getPreciosByIdTipo(idTipo: number): Observable<number[]> {
    const url = `${this.apiUrl}/precio/${idTipo}`;
    return this.http.get<{
      message: string | undefined; error: boolean, data: number[] 
}>(url).pipe(
      map(response => {
        if (response.error) {
          throw new Error(response.message);
        }
        return response.data;
      })
    );
  }

  
  getPrecioBasePorTipo(idtipo: number): Observable<number> {
    const url = `${this.apiUrl}/precio/${idtipo}`;
    return this.http.get<number>(url);
  }
  getAllproducts(): Observable<Allproduct[]> {
    return this.http.get<any[]>('http://localhost:3000/allproduct')
    .pipe(map((res:any) => res.data));  
  }

  //PROD para el CRUD
  getProdAll(): Observable<UIProd[]> {
    return this.http.get<UIProd[]>('http://localhost:3000/prodAll')
    .pipe(map((res:any) => res.data));
  }
  //AUMENTAR EL STOCK 
  aumentarStockProd(idProdcuto:number, nuevoStock:number): Observable<any>{
    return this.http.put(`http://localhost:3000/prodaumentarStock/${idProdcuto}`, {stock:nuevoStock});
  }
  //INTENTO DE AGREGA UN NUEVO PRODUCTO
  agregarProd(producto:any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/agregarprod',producto);
  }

  actualizarStock(tipo: number, color: string, talla: string, nuevoStock: number): Observable<any> {
    const body = {
      tipo: tipo,
      color: color,
      talla: talla,
      stock: nuevoStock
    };

    // Realizar la solicitud PUT al servidor
    return this.http.put<any>("http://localhost:3000/actualizarstock/", body);
  }
  
  getEnvios(): Observable<UIEnvio[]> {
    return this.http.get<UIEnvio[]>('http://localhost:3000/envios')
      .pipe(map((res: any) => res.data));
  }

  borrarDiseno(iddiseno: number): Observable<any> {
    const url = `http://localhost:3000/borrardiseno/${iddiseno}`;

    return this.http.delete(url).pipe(
      map((res: any) => res)
    );
  }

  agregarDiseno(diseno:any): Observable<any>{
    return this.http.post<any>('http://localhost:3000/agregardiseno',diseno);
  }

}
