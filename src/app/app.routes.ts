import { Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { AddSportComponent } from './add-sport/add-sport.component';
import { UpdateSportComponent } from './update-sport/update-sport.component';

export const routes: Routes = [
    {path: "sports", component : SportsComponent},
    {path: "add-sport", component : AddSportComponent},
    {path: "updateSport/:id",  component: UpdateSportComponent},
    {path: "", redirectTo: "sports", pathMatch: "full"}
];
