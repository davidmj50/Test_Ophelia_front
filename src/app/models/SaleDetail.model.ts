import { ISale } from "./Sale.model";
import { IProduct } from "./Product.model";

export interface ISaleDetail {
    Id: number;
    Amount: number;
    Discount: number;
	DiscountValue: number;
    TotalSale: number;
    SaleId: number;
    ProductId: number;
}


export class SaleDetail {
    Id: number;
    Amount: number;
    Discount: number;
	DiscountValue: number;
    TotalSale: number;
    SaleId: number;
    ProductId: number;
    Sale: ISale;
    Product: IProduct;

    constructor(cantidad: number, descuento: number, valor_Descuento: number, monto: number, venta: ISale, producto: IProduct){
        this.Amount = cantidad;
        this.Discount = descuento;
        this.DiscountValue = valor_Descuento;
        this.TotalSale = monto;
        this.SaleId = venta.Id;
        this.Sale = venta;
        this.Product = producto;
        this.ProductId = producto.id;
    }
}