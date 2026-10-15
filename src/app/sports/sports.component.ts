import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent implements OnInit  {
  sports! : Sport[]; //un tableau de Sport
  constructor(private sportService: SportService ) {
    this.sports = sportService.listeSports();
   }

   ngOnInit() {

     }

     supprimerSport(s: Sport)
   {
     // console.log(s);
    let conf = confirm("Voulez-vous vraiment supprimer ce sport ?");
     if (conf)
       this.sportService.supprimerSport(s);
   }

}
