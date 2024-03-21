import { Injectable } from '@angular/core';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})

export class EtudiantService {
  private etudiantsUrl = '../../assets/etudiants.json';
  private dataetudiants: Etudiant[] = [];

  constructor() {
    this.loadEtudiants();
  }

// J'ai préféré le faire ainsi pour faciliter l'ajout de nouveaux éléments dans le tableau.

  private async loadEtudiants() {
    const response = await fetch(this.etudiantsUrl);
    const data = await response.json();
    this.dataetudiants = data.map((item: any) => new Etudiant(
      item.lastName,
      item.firstName,
      item.address,
      item.postalCode,
      item.city,
      item.email,
      item.gender,
      item.age,
      item.id
    ));
  }

  getEtudiants(): Promise<Etudiant[]> {
    return this.loadEtudiants().then(() => this.dataetudiants);
  }
}
