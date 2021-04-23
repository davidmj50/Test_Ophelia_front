import { IRole, Role } from './Role.model';

export interface IUser {
    id?: number;
    email: string;
    password: string;
    userName: string;
    fisrtName: string;
    lastName: string;
    phoneNumber: string;
    lastUpdate: Date;
    roleId: number;
    role: IRole;
}

export class User {
    id?: number;
    email: string;
    password: string;
    userName: string;
    fisrtName: string;
    lastName: string;
    phoneNumber: string;
    lastUpdate: Date;
    roleId: number;
    role: Role;

    constructor(eMail: string,
        password: string,
        userName: string,
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        fecha_Nacimiento: string,
        idRole: number) {
          this.email = eMail;
          this.password = password;
          this.userName = userName;
          this.fisrtName = nombre;
          this.lastName = apellido;
          this.phoneNumber = telefono;
          this.role = new Role(idRole, "");
    }
}