import { IUser, User } from "./User.model";

export interface ISale {
    Id: number;
    SaleReference: string;
    SaleDate: Date;
    Amount: number;
    UserId: number;
}


export class Sale {
    Id: number;
    SaleReference: string;
    SaleDate: Date;
    Amount: number;
    UserId: number;
    User: User;

    constructor(
        id_Venta: number, 
        comprobante_Venta: string, 
        fecha_Venta: Date, 
        total_Venta: number,        
        usuario: User) {
            this.Id = id_Venta;
            this.SaleReference = comprobante_Venta;
            this.SaleDate = fecha_Venta;
            this.Amount = total_Venta;
            this.UserId = usuario.id
    }
}