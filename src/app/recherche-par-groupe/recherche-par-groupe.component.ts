import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sport } from '../model/sport.model';
import { Groupe } from '../model/groupe.model';
import { SportService } from '../services/sport.service';

@Component({
  selector: 'app-recherche-par-groupe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recherche-par-groupe.component.html'
})
export class RechercheParGroupeComponent implements OnInit {
  sports!: Sport[];
  groupes!: Groupe[];
  idGroupe!: number;

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.groupes = this.sportService.listeGroupes();
    this.sports = this.sportService.listeSports();
  }

  onChange(): void {
    // "Tous les groupes" => idGroupe vaut 0 (ou n'est pas défini)
    this.sports = this.idGroupe
      ? this.sportService.rechercherParGroupe(this.idGroupe)
      : this.sportService.listeSports();
  }
}
