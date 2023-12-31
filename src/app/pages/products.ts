export interface Tipo{
    idtipo: number;
    nombre:string;
    imagen:string;
}

export interface Polera{
    idpolera: number;
    color: string;
    imagen: string;
    precio: number;
    tipo: number;
    talla: string;
    stock: number;
}

export interface Mangalarga{
    idmangalarga: number;
    color: string;
    imagen: string;
    precio: number;
    tipo: number;
    talla: string;
    stock: number;
}

export interface Poleron{
    idpoleron: number;
    color: string;
    imagen: string;
    precio: number;
    tipo: number;
    talla: string;
    stock: number;
}

export interface Polo{
    idpolo: number;
    color: string;
    imagen: string;
    precio: number;
    tipo: number;
    talla: string;
    stock: number;
}

export interface Color{
    idcolor: number;
    tipo: number;
    color: string;
    imagen: string;
    
}

export interface Colorml{
    idcolor: number;
    tipo: number;
    color: string;
    imagen: string;
    
}

export interface Talla{
    idtalla: number;
    talla: string;
}

export interface Diseno{
    iddiseno: number;
    nombre: string;
    imagen: string;
}



  

export interface Allproduct{
    id:number;
    tipo:string;
    imagen:string;
    precio:number;
    stock:number;
}
export interface UIPolera{
    imagen: string;
    precio: number;
    tipo: number;
    stock: number;
}

export interface Prod{
    idprod: number;
    tipo: number;
    color: string;
    talla: string;
    precio: number;
    stock: number;
    imagen: string;
}

export interface UIProd{
    idprod: number;
    tipo: number;
    color:string;
    talla:string;
    precio: number;
    stock: number;
    imagen:string;    
}

export interface UItipoNombres{
    1:'Polera',
    2:'Polera Manga Larga',
    3:'Polerón Canguro',
    4:'Polerón Polo'
}

export interface UIEnvio {
    idenvio: number;
    productosid: string;
    nombre: string;
    apellido: string;
    rut: string;
    ciudad: string;
    direccion: string;
    celular: string;
    correo: string;
  }

  export class Producto {
    idproducto: number = 0;
    idtipo: number = 0;
    precio: number = 0;
    talla: string = '';
    color: string = '';
    cantidad: number = 0;
    imagen: string = '';
    diseno: string = '';
  }

  export interface Ventas{
    idventa: number;
    idenvio:number
  }

  export interface Envio {
    idenvio: number;
    productosid: string;
    nombre: string;
    apellido: string;
    rut: string;
    ciudad: string;
    direccion: string;
    celular: string;
    correo: string;
    activo: boolean;
  }
