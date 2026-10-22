import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sport } from '../model/sport.model';
import { SportService } from '../services/sport.service';
import { SearchFilterPipe } from '../pipes/search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  allSports!: Sport[];

  // 2) via le service (api) : bouton "Rechercher"
  nomApi = '';
  resultatsApi: Sport[] = [];

  // 3) via l'évènement keyup
  nomKeyup = '';
  resultatsKeyup: Sport[] = [];

  // 4) via un pipe (le filtre est appliqué dans le template)
  nomPipe = '';

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.allSports = this.sportService.listeSports();
    this.resultatsApi = this.allSports;
    this.resultatsKeyup = this.allSports;
  }

  // 2) appel de la méthode du service (équivalent d'un appel API)
  rechercherParApi(): void {
    this.resultatsApi = this.sportService.rechercherParNom(this.nomApi);
  }

  // 3) déclenchée à chaque touche relâchée
  rechercherParKeyup(): void {
    this.resultatsKeyup = this.sportService.rechercherParNom(this.nomKeyup);
  }
}
