import { Injectable } from '@angular/core';
import { Sport } from '../model/sport.model';
import { Groupe } from '../model/groupe.model';

@Injectable({
  providedIn: 'root'
})
export class SportService {
  sports : Sport[]; //un tableau de Sport
  groupes : Groupe[];

  sport! : Sport;

  constructor() {
    this.groupes=[{idgrp : 1, nomgrp : "junior"}, {idgrp : 2, nomgrp : "senior"}, {idgrp : 3, nomgrp : "veteran"}];


    
    this.sports = [
      { idSport : 1, nomSport : "Football",   categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 11, dateCreation : new Date("1863-12-08"),
        descriptionSport : "Deux équipes s'affrontent pour marquer des buts avec un ballon, principalement avec les pieds.", groupeSport : this.groupes[1]},
      { idSport : 2, nomSport : "Basketball", categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 5, dateCreation : new Date("1891-12-21"),
        descriptionSport : "Les joueurs marquent des points en envoyant le ballon dans le panier adverse.", groupeSport : this.groupes[0]},
      { idSport : 3, nomSport : "Tennis",     categorieSport : "Raquette",   niveauSport : "Avancé",        nombreJoueurs : 1, dateCreation : new Date("1873-02-23"),
        descriptionSport : "Sport de raquette joué en simple ou en double sur un court, séparé par un filet.", groupeSport : this.groupes[2]},
      { idSport : 4, nomSport : "Volleyball", categorieSport : "Collectif",  niveauSport : "Débutant",      nombreJoueurs : 6, dateCreation : new Date("1895-02-09"),
        descriptionSport : "Deux équipes séparées par un filet doivent faire toucher le ballon au sol adverse.", groupeSport : this.groupes[1]},
      { idSport : 5, nomSport : "Natation",   categorieSport : "Aquatique",  niveauSport : "Débutant",      nombreJoueurs : 1, dateCreation : new Date("1908-07-19"),
        descriptionSport : "Déplacement dans l'eau en nage libre, brasse, dos crawlé ou papillon.", groupeSport : this.groupes[0]},
      { idSport : 6, nomSport : "Handball",   categorieSport : "Collectif",  niveauSport : "Intermédiaire", nombreJoueurs : 7, dateCreation : new Date("1917-01-01"),
        descriptionSport : "Deux équipes se passent le ballon à la main pour marquer dans le but adverse.", groupeSport : this.groupes[2]},
      { idSport : 7, nomSport : "Athlétisme", categorieSport : "Individuel", niveauSport : "Intermédiaire", nombreJoueurs : 1, dateCreation : new Date("1912-07-17"),
        descriptionSport : "Ensemble de disciplines de course, de saut et de lancer.", groupeSport : this.groupes[1]},
      { idSport : 8, nomSport : "Rugby",      categorieSport : "Collectif",  niveauSport : "Avancé",        nombreJoueurs : 15, dateCreation : new Date("1871-01-26"),
        descriptionSport : "Sport de contact où l'on porte le ballon ovale jusqu'à l'en-but adverse.", groupeSport : this.groupes[2]}
    ];
   }

    listeSports():Sport[] {
      return this.sports;
    }

    ajouterSport( sp: Sport){
      this.sports.push(sp);
    }

    supprimerSport( sp: Sport){
      //supprimer le sport sp du tableau sports
       const index = this.sports.indexOf(sp, 0);
       if (index > -1) {
         this.sports.splice(index, 1);
       }
       //ou Bien
       /*  this.sports.forEach((cur, index) => {
          if(sp.idSport === cur.idSport) {
                this.sports.splice(index, 1);
             }
       }); */
     }

     consulterSport(id:number): Sport{
      this.sport =  this.sports.find(s => s.idSport == id)!;
        return this.sport;
     }

     trierSports(){
      this.sports = this.sports.sort((n1,n2) => {
        if (n1.idSport! > n2.idSport!) {
            return 1;
        }
       if (n1.idSport! < n2.idSport!) {
            return -1;
        }
      return 0;
    });
    }

updateSport(s:Sport)
    {
     // console.log(s);
      this.supprimerSport(s);
      this.ajouterSport(s);
      this.trierSports();
    }
listeGroupes():Groupe[] {
  return this.groupes;
}
consulterGroupe(id:number): Groupe{
return this.groupes.find(grp => grp.idgrp == id)!;
}


  }
