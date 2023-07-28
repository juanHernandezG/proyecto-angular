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


export interface Producto {
    idproducto: number;
    idtipo: number;
    precio: number;
    talla: string;
    color: string;
    cantidad: number;
    imagen: string;
    diseno: string;
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