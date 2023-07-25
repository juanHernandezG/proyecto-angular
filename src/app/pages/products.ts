export interface IProduct{
    id_tipo: number;
    tipo:string;
    imageUrl:string;
}

export interface Talla{
    id_talla: number;
    talla: string;
}

export interface Color{
    id_color: number;
    color:string;
}

export interface Producto{
    id_producto: number;
    base_id: number;
    diseno_id: number;
    precio: number;
}

export interface Diseno{
    id_diseno: number;
    diseno: string;
}