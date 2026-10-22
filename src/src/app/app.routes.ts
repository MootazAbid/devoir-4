import { Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
    {path: "sports", component : SportsComponent},
    {path: "add-sport", component : AddSportComponent},
    {path: "updateSport/:id",  component: UpdateSportComponent},
    {path: "rechercheParGroupe", component : RechercheParGroupeComponent},
    {path: "rechercheParNom", component : RechercheParNomComponent},
    {path: "", redirectTo: "sports", pathMatch: "full"}
];
