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
    
}

export interface Allproduct{
    id:number;
    tipo:string;
    imagen:string;
    precio:number;
    stock:number;
}