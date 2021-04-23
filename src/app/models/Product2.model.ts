import { ICategory2, Category } from './Category.model';

export interface IProduct {
    id?: number;
    ProductName: string;
    Description: string;
    Price: number;
    Stock: number;
    Image: string;
    Category: ICategory2;
    LastUpdate: Date;
    CategoryId: number;
    Active: boolean;
}

export class Product {
    id?: number;
    ProductName: string;
    Description: string;
    Price: number;
    Stock: number;
    Image: string;
    Category: ICategory2;
    LastUpdate: Date;
    CategoryId: number;
    Active: boolean;

    constructor(
        nombre_Producto: string,
        descripcion: string,
        precio: number,
        stock: number,
        imagen: string,
        id_categoria: number) {
        this.ProductName    = nombre_Producto;
        this.Description        = descripcion;
        this.Price             = precio;
        this.Stock              = stock;
        this.Image             = imagen;
        this.CategoryId = id_categoria;
        this.LastUpdate = new Date();
        this.Active = true;
    }
}
