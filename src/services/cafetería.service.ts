import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import​ { ​AngularFireDatabase​ } ​from​ ​"angularfire2/database"​;
import { Cafetería } from "../models/cafeteríamodel";
import { Time} from "@angular/common";

@​Injectable​()
export class CafeteríaService{

    private cafeterías: Cafetería[] = [
        {
        nombre: "Sabatini",
        campus: "Leganes",
        hora_de_abrir: {hours:9,minutes:0},
        hora_de_cerrar: {hours:17,minutes:30}
        },
        {
        nombre: "Padre Soler",
        campus: "Leganes",
        hora_de_abrir: {hours:9,minutes:0},
        hora_de_cerrar: {hours:17,minutes:30}
        },

    ];

    getCafeterías(){
        return this.cafeterías;
    }

}