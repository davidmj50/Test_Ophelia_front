export interface IRole {
    id: number;
	name: string;
    lastUpdate: Date;
    active: boolean;
}

export class Role {
    id: number;
	name: string;
    lastUpdate: Date;
    active: boolean;
    
    constructor(id_rol: number, nombre_Rol: string) {
        this.name = nombre_Rol;
        this.id = id_rol;
    }
}