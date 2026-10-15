import { Groupe } from "./groupe.model";

export class Sport {
    idSport? : number;
    nomSport? : string;
    categorieSport? : string;
    descriptionSport? : string;
    niveauSport? : string;
    nombreJoueurs? : number;
    dateCreation? : Date ;
    groupeSport?: Groupe;
}
