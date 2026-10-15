import { Component, OnInit } from '@angular/core';
import { Sport } from '../model/sport.model';
import { Groupe } from '../model/groupe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SportService } from '../services/sport.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-sport',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-sport.component.html',
  styles: ``
})
export class UpdateSportComponent implements OnInit {
  currentSport  = new Sport();
  groupes! : Groupe[];
  updatedIdgrp! : number;

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private sportService: SportService
             
) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
this.currentSport = this.sportService.consulterSport(this.activatedRoute.snapshot. params['id']);
   this.groupes = this.sportService.listeGroupes();
   this.updatedIdgrp = this.currentSport.groupeSport?.idgrp!;
  }


  updateSport()
  { //console.log(this.currentSport);
    this.currentSport.groupeSport = this.sportService.consulterGroupe(this.updatedIdgrp);
    this.sportService.updateSport(this.currentSport);
    this.router.navigate(['sports']);
  }

}
