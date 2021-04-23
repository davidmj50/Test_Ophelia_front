import { ICategory } from "./Category.model";

export interface IProduct {
    id: number;
    productName: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: ICategory;
    categoryId: number;
    cantidad: number;
}
