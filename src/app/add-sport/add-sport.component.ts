import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { Router } from '@angular/router';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-add-sport',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-sport.component.html',
  styleUrl: './add-sport.component.css'
})
export class AddSportComponent implements OnInit {

  newSport = new Sport();
  groupes! : Groupe[];
  newIdgrp! : number;

  message! : string;
  newGroupe!: Groupe;

  constructor(private sportService: SportService,
              private router :Router
   ) {}
   ngOnInit() {
this.groupes = this.sportService.listeGroupes();
}


  addSport(){
   // console.log(this.newSport);
   this.newGroupe=this.sportService.consulterGroupe(this.newIdgrp);
   this.newSport.groupeSport = this.newGroupe;

   this.sportService.ajouterSport(this.newSport);
   //this.message = "Sport "+this.newSport.nomSport +" ajouté avec succès !";
   this.router.navigate(['sports']);
  }


}
