export interface ICategory {
    id?: number;
    category_Name: string;
    description: string;
    lastUpdate: Date;
    active: boolean;
}

export class Category {
    id?: number;
    category_Name: string;
    description: string;
    lastUpdate: Date;
    active: boolean;

    constructor(nombre: string, descripcion: string, id_categoria: number) {
        this.category_Name = nombre;
        this.description = descripcion;
        this.id = id_categoria;
    }
}
export interface ICategory2 {
    id?: number;
    category_Name: string;
    description: string;
    lastUpdate: Date;
    active: boolean;
}
