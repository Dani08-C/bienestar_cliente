export class InfoEspecialEstudiante {
    CondicionDesplazado: boolean;
    CondicionEspecial: string;
    Discapacidad: boolean;
    Patologia: boolean;
    SeguridadSocial: string;
    SerPiloPaga:boolean;
    constructor() {
        this.CondicionDesplazado= false;
        this.CondicionEspecial= "";
        this.Discapacidad= false;
        this.Patologia= false;
        this.SeguridadSocial= "";
        this.SerPiloPaga= false;
    }
}