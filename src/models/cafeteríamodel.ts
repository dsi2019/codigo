import { Time } from "@angular/common";

export interface Cafetería {
    nombre: string;
    campus: string;
    hora_de_abrir: Time;
    hora_de_cerrar: Time;
 };